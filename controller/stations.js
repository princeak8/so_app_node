import {ugwuaji, adiabor} from './stations/index';

const send = (wss) => {
    ugwuaji(wss);
    adiabor(wss);
}

export default send;
