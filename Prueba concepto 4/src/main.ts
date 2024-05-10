import {cambiarCarta1, bloqueCartaHTML1, bloqueCartaHTML2, cambiarCarta2 } from "./ui";

if(bloqueCartaHTML1 && bloqueCartaHTML1 instanceof HTMLDivElement) {
    bloqueCartaHTML1.addEventListener("click", cambiarCarta1)
}

if(bloqueCartaHTML2 && bloqueCartaHTML2 instanceof HTMLDivElement) {
    bloqueCartaHTML2.addEventListener("click", cambiarCarta2)
}
