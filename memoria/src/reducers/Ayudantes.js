import { crudHOD } from './helper/hods'

const { reducer , add , sel , reset} = crudHOD('Ayudantes')




export default reducer
export const addAyudante = add
export const selectAyudante = sel
export const resetAyudante = reset
