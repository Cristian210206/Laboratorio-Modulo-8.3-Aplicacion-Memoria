import { Animales, cartasAnimales } from "./modelo";

const barajarArray = (array : Animales[]) => {
    for(let i = array.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i +1));
        [array[i], array[j]] = [array[j], array[i]]
    }
    return array
}

export const cartasBarajadas : Animales[] = barajarArray(cartasAnimales)