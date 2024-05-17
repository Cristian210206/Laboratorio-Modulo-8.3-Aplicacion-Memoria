import {Carta, Tablero, cartas} from "./modelo"

export const carta1 = document.getElementById("carta1")
export const carta2 = document.getElementById("carta2")
export const carta3 = document.getElementById("carta3")
export const carta4 = document.getElementById("carta4")
export const carta5 = document.getElementById("carta5")
export const carta6 = document.getElementById("carta6")
export const carta7 = document.getElementById("carta7")
export const carta8 = document.getElementById("carta8")
export const carta9 = document.getElementById("carta9")
export const carta10 = document.getElementById("carta10")
export const carta11 = document.getElementById("carta11")
export const carta12 = document.getElementById("carta12")

export const cartasHTML = [carta1,carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10, carta11, carta12]

export const bloqueCarta1 = document.getElementById("bloqueCartas1")
export const bloqueCarta2 = document.getElementById("bloqueCartas2")
export const bloqueCarta3 = document.getElementById("bloqueCartas3")
export const bloqueCarta4 = document.getElementById("bloqueCartas4")
export const bloqueCarta5 = document.getElementById("bloqueCartas5")
export const bloqueCarta6 = document.getElementById("bloqueCartas6")
export const bloqueCarta7 = document.getElementById("bloqueCartas7")
export const bloqueCarta8 = document.getElementById("bloqueCartas8")
export const bloqueCarta9 = document.getElementById("bloqueCartas9")
export const bloqueCarta10 = document.getElementById("bloqueCartas10")
export const bloqueCarta11 = document.getElementById("bloqueCartas11")
export const bloqueCarta12 = document.getElementById("bloqueCartas12")

export let indiceActual = 0
export let cartaActual = carta1

export const traerValorIndiceCarta = (indiceCarta : number, carta : HTMLElement | null) => {
  indiceActual = indiceCarta
  cartaActual = carta
}

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
  export const sePuedeVoltearLaCarta = (tablero: Tablero): boolean => {
    if(tablero.estadoPartida != "DosCartasLevantadas" && tablero.cartas[indiceActual].encontrada === false && tablero.cartas[indiceActual].estaVuelta === false) {
      return true
    } else {
      return false
    }
  }
  
  export const voltearLaCarta = (tablero: Tablero) : void => {
    if(cartaActual && cartaActual instanceof HTMLImageElement) {
      cartaActual.src = tablero.cartas[indiceActual].imagen
    }
  }
  
  /*
    Dos cartas son pareja si en el array de tablero de cada una tienen el mismo id
  */
let indiceA : number = 0
let indiceB : number = 0
  
  export const sonPareja = (tablero: Tablero): boolean => {
    indiceA = tablero.indiceCartaVolteadaA as number
    indiceB = tablero.indiceCartaVolteadaB as number
    if(cartas[indiceA].idFoto === cartas[indiceB].idFoto) {
        return true
    } else {
        return false
    }
  }
  
  /*
    Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa.
  */
 let cartasEncontradas = 0

  export const parejaEncontrada = (tablero:Tablero) : void => {
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
  
  export const iniciaPartida = (tablero:Tablero): void => {
    tablero = {
      ...tablero,
      cartas: cartasBarajadas,
      estadoPartida: "CeroCartasLevantadas"
    }
  };