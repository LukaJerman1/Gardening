import React from "react";

import { useParams } from 'react-router-dom';

interface Rastlina{
    id: number;
    ime: string;
    latinskoIme: string;
    
    koda: number;
    cena: number;
    velikost: number;
    notranjaZunanja: string;
    zahtevnostVzdrevanja: string;
    barvaCvetov:string;
    opis?:string;

    slika?: HTMLInputElement | string;
}


interface NakupProps{
    elementi: Rastlina[];
}


function RozaNakup(props: NakupProps){
    const { id }: any = useParams();
    const {elementi} = props;
    
    const [element, setElement] = React.useState<Rastlina>(props.elementi[id]);
    //const [element, setElement] = React.useState<Rastlina>(props.elementi[id]);

    return(
        <div>
            <h3>
                Ime: {element.ime} <br />
                Latinsko ime: {element.latinskoIme} <br />
            </h3>
            Koda: {element.koda} <br />
            Cena: {element.cena} <br />
            Velikost: {element.velikost}<br />
            Notranja ali zunanja uporaba: {element.notranjaZunanja} <br />
            Zahtevnost Vzdrzevanja: {element.zahtevnostVzdrevanja} <br />
            Barva Cvetov: {element.barvaCvetov} <br />
            Opis: {element.opis} <br />
            slika: <br />
            <img src={String(element.slika)} height="200px"/> <br />
            
        </div>
    )
}

export default RozaNakup;
