import React from 'react';
import RastlinaFn from './Rastlina';
import { Link } from 'react-router-dom';

import Forma from './Forma'



interface RastlinaFn{
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

    slika?: HTMLInputElement | string
}

interface TeloProps{
    elementi: RastlinaFn[];
    onAdd: (element : RastlinaFn) => any
    
}

function Telo(props: TeloProps){
    const {elementi} = props;
    const [stevec, setStevec ] = React.useState(0);

    const handleAdd=(element:RastlinaFn) => {
        props.onAdd(element);
    }

    React.useEffect(() => {
        setStevec(prestej());
    } , [elementi]);

    const prestej = () => {
        let stevec: number = 0;
        for (const element of elementi) {
                stevec++;
        }
        return stevec;
    }

    

            /*id={el.id} ime={el.ime} latinskoIme={el.latinskoIme} 
                                    koda={el.koda} cena={el.cena} velikost={el.velikost} notranjaZunanja={el.notranjaZunanja}
                                    zahtevnostVzdrevanja={el.zahtevnostVzdrevanja} barvaCvetov={el.barvaCvetov} opis={el.opis}*/ 

            //<button id="test" onClick={handleElementClick}></button>
    return(
        <div id="container">
            
            <div id="forma">
            <Forma id={elementi.length} onAdd={handleAdd}></Forma>
            </div>

            <div id="roze">
            <h3 id="stevec">Stevilo roz: {stevec}</h3>
            <ul>
                {elementi.map((el) => (
                    <Link key={el.id} to={`/${el.id}`}>
                        <RastlinaFn id={el.id} ime={el.ime} latinskoIme={el.latinskoIme} slika={el.slika}></RastlinaFn>
                            </Link>
                ))}
            </ul>
            </div>
            
        </div>
    )



}

export default Telo;