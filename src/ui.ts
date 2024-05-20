import { Tablero, tablero } from "./modelo";
import { comprobarSiSonPareja, sePuedeVoltearLaCarta, voltearLaCarta } from "./motor";

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
const fasesDelJuego = (carta : HTMLImageElement, tablero: Tablero, indiceCarta : number) => {
  switch(tablero.estadoPartida) {
    case "CeroCartasLevantadas"
    :
    if(sePuedeVoltearLaCarta(tablero, indiceCarta) === true) {
      tablero.indiceCartaVolteadaA = indiceCarta
      voltearLaCarta(tablero, carta, indiceCarta)
      tablero.estadoPartida = "UnaCartaLevantada"
    }
    break
    case "UnaCartaLevantada"
    :
    if(sePuedeVoltearLaCarta(tablero,indiceCarta) === true) {
      tablero.indiceCartaVolteadaB = indiceCarta
      voltearLaCarta(tablero, carta, indiceCarta)
      tablero.estadoPartida = "DosCartasLevantadas"
    }
    break
    case "DosCartasLevantadas"
    :
    comprobarSiSonPareja(tablero)
  }
}