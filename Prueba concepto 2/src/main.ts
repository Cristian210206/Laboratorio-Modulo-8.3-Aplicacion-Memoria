import {cambiarCarta, bloqueCartaHTML } from "./ui";

if(bloqueCartaHTML && bloqueCartaHTML instanceof HTMLDivElement) {
    bloqueCartaHTML.addEventListener("click", cambiarCarta)
}
