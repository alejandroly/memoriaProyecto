export const alumnos = { nombre: 'Alejandro',
                         apellido: 'Arriagada',
                         user:'alejandroly',
                         pass:'123',
                         cursos:{
                           '2019-1':[{code:'MAT-024',
                                      name: 'Mate 4',
                                      ayudantes:[
                                          {rol:'201573032-6',
                                            name:'Miguel Rosas',
                                            estado_encuesta:false,
                                          },
                                         {rol:'201573021-6',
                                          name:'Miguel Rosas',
                                          estado_encuesta:false,
                                          },
                                          {rol:'201573021032-6',
                                           name:'Miguel Rosas',
                                           estado_encuesta:false,
                                         },
                                      ]
                                     },
                                     {code:'IA-024',
                                      name: 'Inteligencia Artificial',
                                      ayudantes:[
                                          {rol:'201473032-6',
                                           name:'Sebastian Gallardo',
                                           estado_encuesta:false,
                                                    }
                                                ]
                                               },
                                    ]
                           }
                        }

export const ayudante = { nombre: 'Alejandro',
                         apellido: 'Arriagada',
                         user:'alejandroly',
                         pass:'123',
                         cursos:{
                           '2019-1':{
                             'MAT-024':{
                               nombre:'Mate 4',
                               resultados_encuesta:{},
                               estado_encuesta: false,
                             }
                           }
                         }
                       }

export const encuesta = { Categoria1 : { 1:{titulo:'',valor:0},
                                         2:{titulo:'',valor:0}},
                          Categoria2 : { 1:{titulo:'',valor:''}}


}
