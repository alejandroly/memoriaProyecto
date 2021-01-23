import { crudHOD } from './helper/hods'

const { reducer , add  , reset} = crudHOD('Noticias')




export default reducer
export const addNews = add
export const resetNews = reset
