import { render } from "@testing-library/react";
import react from "react";
import RastlinaFn from './Rastlina';
import { Link } from 'react-router-dom';
import RozaVKosari from './RozaVKosari';



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

    slika?: HTMLInputElement | string
}


interface kosaricaProps{
    roze: Rastlina[];
    ustvariNakup: (roza : Rastlina[]) => any
}




function Kosarica(props: kosaricaProps){
    const {roze} = props;
/*
    const dodajKosarica=(roza:Rastlina) => {
        props.onDodajRozo(roza);
    }
*/
    //const [rozeKosarica,setRozeKosarica] = React.useState<Rastlina[]>([]);

    const handleNakup=()=>{
        props.ustvariNakup(roze);
    }



    return(
    <div id="container">
        
        <div id="roze_kosarica">
        <ul>
        {roze.map((el) => (
            <Link key={el.id} to={`/kosarica/${el.id}`}>
                <RastlinaFn id={el.id} ime={el.ime} latinskoIme={el.latinskoIme} slika={el.slika}></RastlinaFn>
                    </Link>
        ))}
        </ul>
        </div>
        <br/><button id="nakup" onClick={handleNakup}>Nakup</button>
    </div>
    )
}

export default Kosarica;