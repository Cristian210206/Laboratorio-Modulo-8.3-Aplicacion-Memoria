const cartaHTML = document.getElementById("carta")
export const bloqueCartaHTML = document.getElementById("cartas")

export const cambiarCarta = () => {
    if(cartaHTML && cartaHTML instanceof HTMLImageElement) {
        cartaHTML.src="https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/2.png?raw=true"
    }
}