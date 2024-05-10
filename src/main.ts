import { cartasBarajadas } from "./motor";
import { cambiarCarta, cartaHTML } from "./ui";

console.log(cartasBarajadas)
if(cartaHTML && cartaHTML instanceof HTMLImageElement) {
    cartaHTML.addEventListener("click", cambiarCarta)
}