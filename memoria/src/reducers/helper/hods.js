//HIGH ORDERS DUCKS

import {makeType,asyncMac,createReducer, reduceReducers } from './duck-helper'
import { fetchReducer, addReducer, delReducer, selReducer , resetReducer} from './hors'

export const crudHOD = reducer => {

  const t = makeType(reducer)
  const FETCH = t('fetch',true)
  const ADD = t('add',true)
  const DEL = t('del',true)
  const SEL = t('sel',true)
  const RESET = t('reset',true)
  const fetchAC = asyncMac(FETCH)
  const addAC = asyncMac(ADD)
  const delAC = asyncMac(DEL)
  const selAC = asyncMac(SEL)
  const resetAC = asyncMac(RESET)

  const initialState = {
    data: [
      {id:1, name: 'Defecto'},
    ],
    selected:1,
    fetching: false,
    fetched:false,
    error: null,
  }

  const r1 =  createReducer(initialState, fetchReducer(FETCH))
  const r2 =  createReducer(initialState, addReducer(ADD))
  const r3 =  createReducer(initialState, delReducer(DEL))
  const r4 =  createReducer(initialState, selReducer(SEL))
  const r5 =  createReducer(initialState, resetReducer(RESET))



  /**
* payload {
 * id reducer
 * payload,
}
*
*
  **/
  const get =  payload => ({
    actions: fetchAC,
    request: async () => {
      const { url } = payload
      const result = await fetch(url)
      const data = await result.json()
      return data

    }
  })

  const add =  payload => ({
    actions: addAC,
    request: () => {
      return payload
    }
  })

  const sel =  payload => ({
    actions: selAC,
    request: () => {
      return payload
    }
  })

  const reset = () =>({
    actions: resetAC,
    request: () => {
      return 'Reset Completado'
    }
  })


  return{
    reducer: reduceReducers(r1,r2,r3,r4,r5),
    add,
    sel,
    reset,
  }

}
