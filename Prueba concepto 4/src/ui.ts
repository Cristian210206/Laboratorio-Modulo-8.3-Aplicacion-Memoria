const cartaHTML1 = document.getElementById("carta1");
export const bloqueCartaHTML1 = document.getElementById("cartas1");
let cartaHTML1Activada: boolean = false;

const cartaHTML2 = document.getElementById("carta2");
export const bloqueCartaHTML2 = document.getElementById("cartas2");
let cartaHTML2Activada: boolean = false;

export const cambiarCarta1 = () => {
  if (cartaHTML1 && cartaHTML1 instanceof HTMLImageElement) {
    cartaHTML1.src =
      "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/1.png?raw=true";
    cartaHTML1Activada = true;
    setInterval(voltearCartas, 1000)
  }
};

export const cambiarCarta2 = () => {
  if (cartaHTML2 && cartaHTML2 instanceof HTMLImageElement) {
    cartaHTML2.src =
      "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/2.png?raw=true";
      cartaHTML2Activada = true;
      setInterval(voltearCartas, 1000)
  }
};

const voltearCartas = () => {
  if (
    cartaHTML1 !== cartaHTML2 &&
    cartaHTML1Activada === true &&
    cartaHTML2Activada === true &&
    cartaHTML1 &&
    cartaHTML1 instanceof HTMLImageElement &&
    cartaHTML2 &&
    cartaHTML2 instanceof HTMLImageElement
  ) {
    cartaHTML1.src = "";
    cartaHTML2.src = "";
    cartaHTML1Activada = false;
    cartaHTML2Activada = false
  }
};
