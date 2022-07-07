import { getAdidas, getHead, getProducts, getUrich, getVarlion } from "./firebase.js";
import { agregarEvento, buildCards } from "./functions.js";


const app = async () => {

    const elementos = await getProducts()

    const adidas = await getAdidas()

    const head = await getHead()

    const varlion = await getVarlion()

    const urich = await getUrich()

    buildCards(elementos);
    buildCards(adidas);
    buildCards(head);
    buildCards(varlion);
    buildCards(urich);

    agregarEvento()
  
}

app();



