import React from 'react';
import Vrtnarji from './Vrtnarji';
import { Link } from 'react-router-dom';

interface Vrtnarji{
    id: number;
    ime: string;
    priimek:string;
    starost:number;
    specializacija: string;
    opis: string;
    slika?:string;
}


interface OVrtnarstvuProps{
    elementi: Vrtnarji[];
}


function Vrtnarstvo(props: OVrtnarstvuProps){
    const {elementi} = props;

    return(
        <div>
            <div id="vrtnarstvo">
                <span>
                    <h2>Nasplosno:</h2>
                Ukvarjamo se z vzgojo in prodajo enoletnic, dvoletnic, trajnic, sadik oz. 
                cepljenih sadikzelenjave, dišavnic, balkonskih rastlin, rezanega cvetja, itd.. 
                Ponujamo pa tudi pestro izbiro grmovnic in drevnine. 
                Strankam ob nakupu vsake rastline strokovno svetujemo za nadalnjo vzgojo in oskrbo. 
                Zadnja leta se v delovanje vrtnarije vključuje že 3. Generacija, ki prinaša sveže in nove ideje. 
                Zaradi prilagajanja trendom, smo se odločili razširiti dejavnost, tako da še ponujamo ureditev in vzdrževanje okolice.
                </span><br/><br/>
                <span>
                    <h3>Pomlad:</h3>
                V spomladanskem času so pri nam na voljo navadne marjetice, mačehe, primule, grmovnice, 
                okrasna drevnina, tudi še ciklame, ter substrati in ostala ponudba. 
                Posadimo vam tudi vaša balkonska korita ali lonce in jih v ogrevanih steklenjakih oskrbujemo, 
                do primernega vremena za rastline. Sadimo pa tudi rastline za rezano cvetje
                </span>
                <span>
                    <h3>Poletje:</h3>
                Za poletje vzgojimo pelargonije, surfinije in ostalo balkonsko cvetje, ki nam krasijo dom v poletnih mesecih. 
                Večino drevnine, grmovnic in trajnic so takrat najlepša in prava paša za oči. 
                Prav tako se poleti sadijo krizanteme za rezano cvetje, lončne krizanteme in mačehe za jesensko ponudbo.
                </span>
                <span>
                    <h3>Jesen in Zima:</h3>
                V jesenskih in zimskih dneh strankam ponujamo še sadno drevnino, 
                substrate za grobove, mačehe, razne nasade v loncih, aranžmaje, adventne vence, svečnike in pa tudi ciklame. 
                Za zasajevanje drevnine in grmovnic so jesenski meseci idealni, vendar nas rada prehiti prva zmrzal.
                </span>

                <div id="slike">
                <span>
                    <img src={require("./vrtnarija/vrtnar1.jpg")} height="300px"></img>
                </span>
                
                <span>
                    <img src={require("./vrtnarija/vrtnar2.jpg")} height="300px"></img>
                </span>

                <span>
                    <img src={require("./vrtnarija/vrt3.jpeg")} height="300px"></img>
                </span>
            </div>
            </div>
            <div id="vsiVrtnarji">
            <h4>Vsi vrtnarji:</h4><br/>
            
            <ul>
            {elementi.map((el) => (
                    <Link key={el.id} to={`/vrtnarstvo/${el.id}`}>
                            {el.ime} {el.priimek}
                    </Link>
                ))}
            </ul>
            </div>
        </div>
    )
}


export default Vrtnarstvo;