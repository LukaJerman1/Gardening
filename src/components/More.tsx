import React from 'react';

import { useParams } from 'react-router-dom';
import Forma from './Forma';
import SpremeniElement from './SpremeniElement'

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
    zaloge: (element : Rastlina) => any;
    onAdd: (element : Rastlina) => any;
}

function More(props: RastlinaProps){

    const { id }: any = useParams();
    const {elementi} = props;

    const [element, setElement] = React.useState<Rastlina>(props.elementi[id]);
    //const [elementZalog, setElementZalog] = React.useState<Rastlina>(props.elementi[id]);
    //const [kosarica, setKosarica] = React.useState<Rastlina[]>();

    const handleElementClick = () => {
        //let el = {...element};
        //let novoPolje = props.elementi;
        //novoPolje[id] = element;
        props.onChange(element);
    }

    const handleNiZaloge = (e:React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        props.zaloge(element);
    }

    const handleAdd=(element:Rastlina) => {
        props.onAdd(element);
    }


    return(
        <div id="container">
            <div id="forma">
                    <SpremeniElement onAdd={handleAdd}></SpremeniElement>
            </div>
            <div id="roze">
                <div id="posameznaRoza">
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
                    
                        <button id="dodaj" onClick={handleElementClick}>Dodaj v košarico</button>
                        <button id="zmanjkalo" onClick={handleNiZaloge}>Ni Zaloge</button>
                    <br/>
                </div>
            </div>
        </div>
        
    );

}

export default More;