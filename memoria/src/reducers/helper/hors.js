//high order reducers

export const fetchReducer = ({ START , SUCCESS , ERROR}) => ({
  [START]: state => ({...state,fetching: true}),
  [SUCCESS]: (state, { payload }) => ({...state, data:payload ,fetching: false , fetched: true}),
  [ERROR]: (state, { error }) => ({...state,error ,fetching: false})
})


export const addReducer = ({ START , SUCCESS , ERROR}) => ({
  [START]: state => ({...state, creating: true}),
  [SUCCESS]: (state, { payload }) => {
    const newElement = {id: Math.random().toString(36),...payload}
    return   {...state, data: [...state.data,newElement] , creating: false }
  },
  [ERROR]: (state, { error }) => ({...state,error ,creating: false})
})

export const delReducer = ({ START , SUCCESS , ERROR}) => ({
  [START]: state => ({...state, deleting: true}),
  [SUCCESS]: (state, action) => {
    const { payload } = action
    const newData = Object.assign({},state.data)
    delete newData[payload]
    return {
      ...state,
      data: {...newData},
      deleting: false,
      error: null,
    }
  },
  [ERROR]: (state, { error }) => ({...state,error ,deleting: false})
})

export const selReducer = ({ START , SUCCESS , ERROR}) => ({
  [START]: state => ({...state, creating: true}),
  [SUCCESS]: (state, { payload }) => {
    return   {...state, selected: payload}
  },
  [ERROR]: (state, { error }) => ({...state,error ,creating: false})
})
