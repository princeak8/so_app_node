import {
    adiabor, aba, afamIv_vGs, afamViGs, ahaoda, ajah, ajaokuta, akangba, aladja, alagbon, alaoji, alaojiGs, asaba, ayade, azuraIppGs, benin, biu, dadinKowaGs, damaturu, 
    deltaGs, egbinGs, eket, ekim, fakun, ganmo, gbarainGs, gereguGs, gombe, gwagwalada, ibomGs, ihovborNippGs, ikejaWest, ikorodu, ikotAbasi, ikotEkpene, itu, jebba, jebbaGs, jos, 
    kaduna, kainji, kainjiGs, kano, katampe, kebbi, lekki, lokoja, markudi, molai, newHaven, odogunyan, odukpaniGs, okearo, okpaiGs, olorunsogoPhase1Gs, omokuGs, omotoshoPhase1Gs, 
    onitsha, oshogbo, owerri, parasEnergyGs,phMain, riversIppGs, sagamu, sakete, sapeleGs, sapeleNippGs, shiroroGs, transamadiGs, ugwuaji, yenegoa, yola
} from './stations/index';
import { sendMessage } from '../utilities';

//const send = (wss, host, options) => {
const send = (wss, client) => {
    client.on('message', async function (sentTopic, message) {
        alaojiGs(wss, sentTopic, message);
        dadinKowaGs(wss, sentTopic, message);
        eket(wss, sentTopic, message);
        ekim(wss, sentTopic, message);
        fakun(wss, sentTopic, message);
        gereguGs(wss, sentTopic, message);
        gwagwalada(wss, sentTopic, message);
        lokoja(wss, sentTopic, message);
        markudi(wss, sentTopic, message);
        ugwuaji(wss, sentTopic, message);
        // transamadiGs(wss, sentTopic, message);
        // sendMessage(wss, message);
    });

    /* MOVED TO AWS */
    // asaba(wss, client);
    // deltaGs(wss, client);
    // jebbaGs(wss, client);
    // kainji(wss, client);
    // phMain(wss, client);
    // afamViGs(wss, client);
    // okpaiGs(wss, client);
    // odukpaniGs(wss, client);
    //ikotEkpene(wss, host, options);


    // adiabor(wss, sentTopic, message);
    // aba(wss, sentTopic, message);
    // afamIv_vGs(wss, sentTopic, message);
    
    // ahaoda(wss, sentTopic, message);
    // ajah(wss, sentTopic, message);
    // ajaokuta(wss, sentTopic, message);
    // akangba(wss, sentTopic, message);
    // aladja(wss, sentTopic, message);
    // alagbon(wss, sentTopic, message);
    // alaoji(wss, sentTopic, message);
    
    // ayade(wss, sentTopic, message);
    // azuraIppGs(wss, sentTopic, message);
    // benin(wss, sentTopic, message);
    // biu(wss, sentTopic, message);
    
    // damaturu(wss, sentTopic, message);
    
    // egbinGs(wss, sentTopic, message);
    
    // ganmo(wss, sentTopic, message);
    // gbarainGs(wss, sentTopic, message);
    
    // gombe(wss, sentTopic, message);
    
    // ibomGs(wss, sentTopic, message);
    // ihovborNippGs(wss, sentTopic, message);
    // ikejaWest(wss, sentTopic, message);
    // ikorodu(wss, sentTopic, message);
    // ikotAbasi(wss, sentTopic, message);

    
    

    // itu(wss, client);
    // jebba(wss, client);
    
    // jos(wss, client);
    // kaduna(wss, client);
    
    // kainjiGs(wss, client);
    // kano(wss, client);
    // katampe(wss, client);
    // kebbi(wss, client);
    // lekki(wss, client);
    
    // molai(wss, client);
    // newHaven(wss, client);
    // odogunyan(wss, client);

    //odukpaniGs(wss, host, options);
    

    // okearo(wss, client);
    // olorunsogoPhase1Gs(wss, client);
    // omokuGs(wss, client);
    // omotoshoPhase1Gs(wss, client);
    // onitsha(wss, client);
    // oshogbo(wss, client);
    // owerri(wss, client);
    // parasEnergyGs(wss, client);
    
    // riversIppGs(wss, client);
    // sagamu(wss, client);
    // sakete(wss, client);
    // sapeleGs(wss, client);
    // sapeleNippGs(wss, client);
    // shiroroGs(wss, client);
    // transamadiGs(wss, client);
    
    // yenegoa(wss, client);
    // yola(wss, client);
}

export default send;
