import { info } from 'console';
import React from 'react';
import { Link } from 'react-router-dom';

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


interface NavProps{
    naslov: string;
    info:boolean;
}

function Navigacija(props : NavProps){

//{(props.info?.length > 0) ? <Link to="/urejanje_okolja"></Link> : null}

    const[nekaj,setNekaj] = React.useState<Rastlina[]>([]);


    return(
        
        <div id="nav">
            
            <h1 id="glavniNaslov">{props.naslov}</h1>
            <Link to="/">Domov</Link>
            <Link to="/vrtnarstvo">O Vrtnarstvu</Link>
            <Link to="/kosarica">Kosarica</Link>
            <Link to="/seznam_nakupov">Seznam nakupov</Link>
            {props.info == true?
            <Link to ="/urejanje_okolice">Urejanje Okolice</Link>
            :null
            }
            
        </div>
    )
}

export default Navigacija;