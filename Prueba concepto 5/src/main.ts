import { cambiarCartas1, cambiarCartas2, cambiarCartas3, cambiarCartas4, cambiarCartas5, cambiarCartas6, carta1, carta2, carta3, carta4, carta5, carta6 } from "./ui";


if(carta1 && carta1 instanceof HTMLDivElement) {
    carta1.addEventListener("click", cambiarCartas1)
}

if(carta2 && carta2 instanceof HTMLDivElement) {
    carta2.addEventListener("click", cambiarCartas2)
}

if(carta3 && carta3 instanceof HTMLDivElement) {
    carta3.addEventListener("click", cambiarCartas3)
}

if(carta4 && carta4 instanceof HTMLDivElement) {
    carta4.addEventListener("click", cambiarCartas4)
}

if(carta5 && carta5 instanceof HTMLDivElement) {
    carta5.addEventListener("click", cambiarCartas5)
}

if(carta6 && carta6 instanceof HTMLDivElement) {
    carta6.addEventListener("click", cambiarCartas6)
}