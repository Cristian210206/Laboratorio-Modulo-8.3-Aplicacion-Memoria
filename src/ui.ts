import { Tablero, tablero } from "./modelo";
import { comprobarSiEsPartidaCompleta, mensajeError, mensajeNumeroIntentos, parejaEncontrada, parejaNoEncontrada, sePuedeVoltearLaCarta, sonPareja } from "./motor";

const mapearDivsACartas = (indiceCarta: number, tablero:Tablero) => {
  const dataIndiceId = `data-indice-id="${indiceCarta}"`
  const elementoDiv = document.querySelector(`div[${dataIndiceId}]`)
  const elementoImg = document.querySelector(`img[${dataIndiceId}]`)

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
const vaciarLasCartas = (tablero:Tablero) : void => {
  const imagenes = document.querySelectorAll<HTMLImageElement>("img")

  imagenes.forEach((imagen, indice) => {
    if(!tablero.cartas[indice].encontrada && !tablero.cartas[indice].estaVuelta) {
    imagen.removeAttribute("src")
    }
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
  const cartaIndiceA = tablero.indiceCartaVolteadaA;
  const cartaIndiceB = tablero.indiceCartaVolteadaB;
  if(cartaIndiceA !== undefined && cartaIndiceB !== undefined) {
    if(sonPareja(tablero, cartaIndiceA, cartaIndiceB) === true) {
      parejaEncontrada(tablero, cartaIndiceA, cartaIndiceB)
      comprobarSiEsPartidaCompleta(tablero)
    } else {
      setTimeout(() => {
        parejaNoEncontrada(tablero, cartaIndiceA, cartaIndiceB), vaciarLasCartas(tablero), cambiarNumeroDeIntentos()
      }, 1000 )
    }
  } 
}
const quitarMensajeError = () => {
  if(mensajeError && mensajeError instanceof HTMLHeadingElement) {
    mensajeError.innerText = ""
  }
}
const cambiarMensajeError = () => {
  if(mensajeError && mensajeError instanceof HTMLHeadingElement) {
      mensajeError.innerText = "No se puede voltear una carta que ya esta volteada"
  }
}

const fasesDelJuego = (carta : HTMLImageElement, tablero: Tablero, indiceCarta : number) => {
  if(sePuedeVoltearLaCarta(tablero, indiceCarta)) {
    tablero.cartas[indiceCarta].estaVuelta = true;
    if(tablero.estadoPartida === "CeroCartasLevantadas") {
      tablero.indiceCartaVolteadaA = indiceCarta;
      tablero.estadoPartida = "UnaCartaLevantada";
    } else if(tablero.estadoPartida === "UnaCartaLevantada") {
      tablero.indiceCartaVolteadaB = indiceCarta
      tablero.estadoPartida = "DosCartasLevantadas"
    }
    voltearLaCarta(tablero, carta, indiceCarta)
    quitarMensajeError()
    comprobarSiSonPareja(tablero)
  } else {
    cambiarMensajeError()
  }
  console.log(tablero.cartas)
}