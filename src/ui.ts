import { Tablero, tablero } from "./modelo";
import { comprobarSiEsPartidaCompleta, mensajeError, mensajeNumeroIntentos, parejaEncontrada, parejaNoEncontrada, sePuedeVoltearLaCarta, sonPareja } from "./motor";

const mapearDivsACartas = (indiceCarta: number, tablero:Tablero) => {
  const dataIndiceId = `data-indice-id="${indiceCarta}"`
  const elementoDiv = document.querySelector(`div${dataIndiceId}`)
  const elementoImg = document.querySelector(`img${dataIndiceId}`)

  if(elementoDiv && elementoDiv instanceof HTMLDivElement && elementoImg && elementoImg instanceof HTMLImageElement) {
    elementoDiv.addEventListener("click", () => {
      if (tablero.estadoPartida !== "PartidaNoIniciada") {
        fasesDelJuego(elementoImg, tablero, indiceCarta)
      }
    })
  }
}

export const crearJuego = () => {
  for(let indice = 0; indice < tablero.cartas.length; indice++) {
    mapearDivsACartas(indice, tablero)
  }
}

const voltearLaCarta = (tablero: Tablero, carta: HTMLImageElement, indice: number) : void => {
  if(carta && carta instanceof HTMLImageElement) {
    carta.src = tablero.cartas[indice].imagen
  }
}
const vaciarLasCartas = () : void => {
  const imagenes = document.querySelectorAll<HTMLImageElement>("img")

  imagenes.forEach((imagenes) => {
    imagenes.removeAttribute("src")
  })
}
let numeroIntentos :number = 0

const cambiarNumeroDeIntentos = () => {
  numeroIntentos++
  if(mensajeNumeroIntentos && mensajeNumeroIntentos instanceof HTMLHeadingElement) {
    mensajeNumeroIntentos.innerText = `Numero de intentos: ${numeroIntentos}`
  }
}

const comprobarSiSonPareja = (tablero:Tablero) => {
  if(tablero.indiceCartaVolteadaA != undefined && tablero.indiceCartaVolteadaB !== undefined) {
    if(sonPareja(tablero, tablero.indiceCartaVolteadaA, tablero.indiceCartaVolteadaB) === true) {
      parejaEncontrada(tablero, tablero.indiceCartaVolteadaA, tablero.indiceCartaVolteadaB)
      comprobarSiEsPartidaCompleta(tablero)
    }
  } else {
    setTimeout(() => {
      parejaNoEncontrada(tablero), vaciarLasCartas(), cambiarNumeroDeIntentos()
    }, 1000 )
  }
}

const cambiarMensajeError = (indiceCarta: number) => {
  if(mensajeError && mensajeError instanceof HTMLHeadingElement) {
    if(sePuedeVoltearLaCarta(tablero, indiceCarta) === false) {
      mensajeError.innerText = "No se puede voltear una carta que ya esta volteada"
    } else {
      mensajeError.innerText = ""
    }
  }
}

const fasesDelJuego = (carta : HTMLImageElement, tablero: Tablero, indiceCarta : number) => {
  switch(tablero.estadoPartida) {
    case "CeroCartasLevantadas"
    :
    if(sePuedeVoltearLaCarta(tablero, indiceCarta) === true) {
      tablero.indiceCartaVolteadaA = indiceCarta
      voltearLaCarta(tablero, carta, indiceCarta)
      tablero.estadoPartida = "UnaCartaLevantada"
    } 
    cambiarMensajeError(indiceCarta)
    break
    case "UnaCartaLevantada"
    :
    if(sePuedeVoltearLaCarta(tablero,indiceCarta) === true) {
      tablero.indiceCartaVolteadaB = indiceCarta
      voltearLaCarta(tablero, carta, indiceCarta)
      tablero.estadoPartida = "DosCartasLevantadas"
    }
    cambiarMensajeError(indiceCarta)
    break
    case "DosCartasLevantadas"
    :
    comprobarSiSonPareja(tablero)
  }
}