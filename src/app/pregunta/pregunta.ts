export interface IPregunta {
    preguntaId: number
    pregunta: string
    opciones: IOpcion[]
}

export interface IOpcion {
    opcionId: number
    opcion: string
}
