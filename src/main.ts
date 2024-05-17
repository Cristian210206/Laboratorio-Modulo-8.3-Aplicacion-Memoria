import { tablero } from "./modelo";
import { bloqueCarta1, bloqueCarta2, iniciaPartida } from "./motor";
import { ejecutarEnDiv1, ejecutarEnDiv2 } from "./ui";
const botonPartida = document.getElementById("botonPartida")

const iniciaPartidaBoton = () => iniciaPartida(tablero)

if(botonPartida && botonPartida instanceof HTMLButtonElement) {
    botonPartida.addEventListener("click", iniciaPartidaBoton)
}

if(bloqueCarta1 && bloqueCarta1 instanceof HTMLDivElement) {
    bloqueCarta1.addEventListener("click", ejecutarEnDiv1)
}

if(bloqueCarta2 && bloqueCarta2 instanceof HTMLDivElement) {
    bloqueCarta2.addEventListener("click", ejecutarEnDiv2)
}