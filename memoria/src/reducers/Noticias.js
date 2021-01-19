import { crudHOD } from './helper/hods'

const { reducer , add  } = crudHOD('Noticias')




export default reducer
export const addNews = add
