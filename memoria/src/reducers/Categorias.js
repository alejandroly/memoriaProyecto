import { crudHOD } from './helper/hods'

const { reducer , add , sel } = crudHOD('Categorias')




export default reducer
export const addCategory = add
export const selectCategory = sel
