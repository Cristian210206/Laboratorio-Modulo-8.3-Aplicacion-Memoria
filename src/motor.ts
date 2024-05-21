import {Carta, Tablero, cartas, tablero} from "./modelo"

export const botonPartida = document.getElementById("botonPartida")
export const mensajeError = document.getElementById("mensajeError")
export const mensajeNumeroIntentos = document.getElementById("numeroIntentos")

/*
En el motor nos va a hacer falta un método para barajar cartas
*/
const barajarCartas = (cartas : Carta[]): Carta[] => {
    for(let i = cartas.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i +1));
        [cartas[i], cartas[j]] = [cartas[j], cartas[i]]
    }
    return cartas
  }

  export const cartasBarajadas = barajarCartas(cartas)
  
  /*
    Una carta se puede voltear si no está encontrada y no está ya volteada, o no hay dos cartas ya volteadas
  */
  export const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number): boolean => {
    if(tablero.estadoPartida != "DosCartasLevantadas" && tablero.cartas[indice].encontrada === false && tablero.cartas[indice].estaVuelta === false) {
      return true
    } else {
      return false
    }
  }
  
  /*
    Dos cartas son pareja si en el array de tablero de cada una tienen el mismo id
  */
  
  export const sonPareja = (tablero: Tablero, indiceA : number, indiceB: number): boolean => {
    if(tablero.cartas[indiceA].idFoto === tablero.cartas[indiceB].idFoto) {
        return true
    } else {
        return false
    }
  }
  
  /*
    Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa.
  */
 let cartasEncontradas = 0

  export const parejaEncontrada = (tablero:Tablero, indiceA: number, indiceB: number) : void => {
      tablero.cartas[indiceA].encontrada = true
      tablero.cartas[indiceB].encontrada = true
      cartasEncontradas++
  }
  /*
    Aquí asumimos que no son pareja y las volvemos a poner boca abajo
  */
  export const parejaNoEncontrada = (tablero:Tablero) : void => {
    tablero.cartas = tablero.cartas.map((cartas :Carta) => ({
      ...cartas,
      encontrada: false,
      estaVuelta: false
    }))
    cartasEncontradas = 0
    tablero.indiceCartaVolteadaA = undefined
    tablero.indiceCartaVolteadaB = undefined
    tablero.estadoPartida = "CeroCartasLevantadas"
  }
  
  export const comprobarSiEsPartidaCompleta = (tablero: Tablero) => {
    if(esPartidaCompleta() === true) {
      tablero.estadoPartida = "PartidaCompleta"
    } else {
      tablero.estadoPartida = "CeroCartasLevantadas"
    }
  }

  /*
    Esto lo podemos comprobar o bien utilizando every, o bien utilizando un contador (cartasEncontradas)
  */
  export const esPartidaCompleta= () : boolean => {
    if(cartasEncontradas === 6) {
      return true
    } else {
      return false
    }
  }
  
  /*
  Iniciar partida
  */
  
const iniciaPartida = (tablero:Tablero): void => {
    tablero = {
      ...tablero,
      cartas: cartasBarajadas,
      estadoPartida: "CeroCartasLevantadas"
    }
  }

export const ejecutarEnBotonIniciarPartida = () => {
  iniciaPartida(tablero)
}