import { cartasAnimales } from "./modelo"

export const carta1 = document.getElementById("carta1")
export const carta2 = document.getElementById("carta2")
export const carta3 = document.getElementById("carta3")
export const carta4 = document.getElementById("carta4")
export const carta5 = document.getElementById("carta5")
export const carta6 = document.getElementById("carta6")


export const cambiarCartas1 = () => {
    if(carta1 && carta1 instanceof HTMLImageElement) {
        carta1.src = cartasAnimales[0].imagen
    }
}

export const cambiarCartas2 = () => {
    if(carta2 && carta2 instanceof HTMLImageElement) {
        carta2.src = cartasAnimales[1].imagen
    }
}

export const cambiarCartas3 = () => {
    if(carta3 && carta3 instanceof HTMLImageElement) {
        carta3.src = cartasAnimales[2].imagen
    }
}

export const cambiarCartas4 = () => {
    if(carta4 && carta4 instanceof HTMLImageElement) {
        carta4.src = cartasAnimales[3].imagen
    }
}

export const cambiarCartas5 = () => {
    if(carta5 && carta5 instanceof HTMLImageElement) {
        carta5.src = cartasAnimales[4].imagen
    }
}

export const cambiarCartas6 = () => {
    if(carta6 && carta6 instanceof HTMLImageElement) {
        carta6.src = cartasAnimales[5].imagen
    }
}