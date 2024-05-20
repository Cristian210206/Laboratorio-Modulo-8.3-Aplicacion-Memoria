import { botonPartida, ejecutarEnBotonIniciarPartida, } from "./motor";
import { crearJuego } from "./ui";

document.addEventListener("DOMContentLoaded", crearJuego)

if(botonPartida && botonPartida instanceof HTMLButtonElement) {
    botonPartida.addEventListener("click", ejecutarEnBotonIniciarPartida)
}