import { crudHOD } from './helper/hods'

const { reducer , add , sel , reset} = crudHOD('Cursos')




export default reducer
export const addCurso = add
export const selectCurso = sel
export const resetCurso = reset
