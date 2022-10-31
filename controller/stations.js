import {
    adiabor, aba, afamIv_vGs, afamViGs, ahaoda, ajah, ajaokuta, akangba, aladja, alagbon, alaoji, alaojiGs, asaba, ayade, azuraIppGs, benin, biu, dadinKowaGs, damaturu, 
    deltaGs, egbinGs, eket, ekim, fakun, ganmo, gbarainGs, gereguGs, gombe, gwagwalada, ibomGs, ihovborNippGs, ikejaWest, ikorodu, ikotAbasi, ikotEkpene, itu, jebba, jebbaGs, jos, 
    kaduna, kainji, kainjiGs, kano, katampe, kebbi, lekki, lokoja, markudi, molai, newHaven, odogunyan, odukpaniGs, okearo, okpaiGs, olorunsogoPhase1Gs, omokuGs, omotoshoPhase1Gs, 
    onitsha, oshogbo, owerri, parasEnergyGs,phMain, riversIppGs, sagamu, sakete, sapeleGs, sapeleNippGs, shiroroGs, transamadiGs, ugwuaji, yenegoa, yola
} from './stations/index';

//const send = (wss, host, options) => {
const send = (wss, client) => {
    alaojiGs(wss, client);
    afamViGs(wss, client);
    dadinKowaGs(wss, client);
    eket(wss, client);
    ekim(wss, client);
    fakun(wss, client);
    gereguGs(wss, client);
    gwagwalada(wss, client);
    ikotEkpene(wss, client);
    lokoja(wss, client);
    markudi(wss, client);
    odukpaniGs(wss, client);
    phMain(wss, client);
    ugwuaji(wss, client);

    /* MOVED TO AWS */
    // asaba(wss, client);
    // deltaGs(wss, client);
    // jebbaGs(wss, client);
    // kainji(wss, client);



    // adiabor(wss, client);
    // aba(wss, client);
    // afamIv_vGs(wss, client);
    
    // ahaoda(wss, client);
    // ajah(wss, client);
    // ajaokuta(wss, client);
    // akangba(wss, client);
    // aladja(wss, client);
    // alagbon(wss, client);
    // alaoji(wss, client);
    
    // ayade(wss, client);
    // azuraIppGs(wss, client);
    // benin(wss, client);
    // biu(wss, client);
    
    // damaturu(wss, client);
    
    // egbinGs(wss, client);
    
    // ganmo(wss, client);
    // gbarainGs(wss, client);
    
    // gombe(wss, client);
    
    // ibomGs(wss, client);
    // ihovborNippGs(wss, client);
    // ikejaWest(wss, client);
    // ikorodu(wss, client);
    // ikotAbasi(wss, client);

    //ikotEkpene(wss, host, options);
    

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
    // okpaiGs(wss, client);
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
