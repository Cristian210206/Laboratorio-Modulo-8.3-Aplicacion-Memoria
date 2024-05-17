import { Tablero, tablero } from "./modelo"
import { esPartidaCompleta, parejaEncontrada, parejaNoEncontrada, sonPareja, indiceActual, cartasHTML, carta1, traerValorIndiceCarta, sePuedeVoltearLaCarta, voltearLaCarta, carta2 } from "./motor"

const fasesDelJuego = (tablero:Tablero) => {
    switch(tablero.estadoPartida) {
      case "CeroCartasLevantadas"
      :
      voltearLaCarta(tablero)
      tablero = {
        ...tablero,
        indiceCartaVolteadaA: indiceActual
      }
      tablero.estadoPartida = "UnaCartaLevantada"
      break
      case "UnaCartaLevantada"
      :
      voltearLaCarta(tablero)
      tablero = {
        ...tablero,
        indiceCartaVolteadaB: indiceActual
      }
      tablero.estadoPartida = "DosCartasLevantadas"
      break
      case "DosCartasLevantadas"
      :
      if(sonPareja(tablero) === true) {
        parejaEncontrada(tablero)
      } else {
        parejaNoEncontrada(tablero)
        volverCarta()
      }

      if(esPartidaCompleta() === true) {
        tablero.estadoPartida = "PartidaCompleta"
      } else {
        tablero.estadoPartida = "CeroCartasLevantadas"
      }
    }
  }

const volverCarta = () => {
  let cartaHTMLCambio = carta1
  for(let i = 0; i < cartasHTML.length; i++) {
    cartaHTMLCambio = cartasHTML[i]
    if(cartaHTMLCambio && cartaHTMLCambio instanceof HTMLImageElement) {
      cartaHTMLCambio.src = ""
    }
  }
}

export const ejecutarEnDiv1 = () => {
  traerValorIndiceCarta(0, carta1)
  if(sePuedeVoltearLaCarta(tablero) === true) {
    fasesDelJuego(tablero)
  }
}

export const ejecutarEnDiv2 = () => {
  traerValorIndiceCarta(1, carta2)
  if(sePuedeVoltearLaCarta(tablero) === true) {
    fasesDelJuego(tablero)
  }
}