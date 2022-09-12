import React from 'react';


function UrejanjeOkolice(){
    return(
        <div id="vrtnarstvo">
                <span>
                    <h1>Ker ste kupili rozo, ki raste odzunaj - vam nudimo pomoč pri urejanju okolice</h1><br/>
                    <h2>UrejanjeOkolice:</h2>
                    Čisto in urejeno okolje je vrednota, za katero si moramo prizadevati.
                     Naše storitve urejanja okolja so zanimive tako za gospodinjstva kot podjetja,
                      ki se zavedajo, da je urejeno okolje zrcalo podjetja in odnosov v njem.
                       Opravil se lotimo strokovno, zato si okolje, v katerem potrebujete našo pomoč,
                        najprej ogledamo. Pri ogledu se pogovorimo o vaših željah in pričakovanjih,
                         ki jih smiselno povežemo z našim znanjem in izkušnjami.
                </span><br/><br/>
                <span>
                    <h3>Zakaj Načrt:</h3>
                

Urejanje vrtov se začne pri izdelavi načrta za vrt. 
Z načrtom za vrt vam bo krajinski arhitekt na dolgi rok opredelil, 
kje bo teren tlakovan, kje bo trata, kje bodo zasajena drevesa ali grmovnice. 
Načrt vrta naj bi opredelil, kje bo živa meja, greda s trajnicami ali vrtnicami, 
mogoče skalnjak ali celo ribnik.

Z zasaditvenim načrtom krajinski arhitekt določi sorto in vrsto rastlin, njihovo število, 
mesto, kam bomo posadili drevje, grmovnice, trajnice in vrtnice. 
Rastline v nenehni rasti vsako leto spreminjajo podobo vrta, 
zato se z zasaditvenim načrtom izognemo neljubim in motečim kombinacijam in dragim nepotrebnim nakupom.

                </span>
                <br /><br />
            <div id="slike">
                <span>
                    <img src={require("./vrtnarija/vrt1.jpg")} height="300px"></img>
                </span>
                
                <span>
                    <img src={require("./vrtnarija/vrt2.jpg")} height="300px"></img>
                </span>

                <span>
                    <img src={require("./vrtnarija/vrt3.jpeg")} height="300px"></img>
                </span>
            </div>
        </div>
    )
    
}

export default UrejanjeOkolice;