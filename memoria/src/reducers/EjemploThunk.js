import { crudHOD } from './hods'

const { reducer , add , sel } = crudHOD('thunk')




export default reducer
export const categoriasAdd = add
export const categoriasSel = sel
