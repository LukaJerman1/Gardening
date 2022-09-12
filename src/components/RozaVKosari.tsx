import React from 'react';

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


interface RastlinaProps{
    elementi: Rastlina[];
    onChange: (element: Rastlina) => any;
}

function RozaVKosari(props: RastlinaProps){

    const { id }: any = useParams();
    const {elementi} = props;

    const [element, setElement] = React.useState<Rastlina>(props.elementi[id]);
    //const [kosarica, setKosarica] = React.useState<Rastlina[]>();

    const handleElementClick = () => {
        //let el = {...element};
        //let novoPolje = props.elementi;
        //novoPolje[id] = el;
        props.onChange(element);
    }

    
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
            
                <button id="odstrani" onClick={handleElementClick}>Odstrani iz kosare</button>
            
        </div>
    );

}

export default RozaVKosari;