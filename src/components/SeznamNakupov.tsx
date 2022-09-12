import react from 'react';
import RastlinaFn from './Rastlina';
import { Link } from 'react-router-dom';
import Search from './Search';


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


interface KosaricaProps{
    roze: RastlinaFn[];
    onSearch :(element: string ) => any;
    //onOkolje: (notriZunaj:string) => any;
}


function SeznamNakupov(props: KosaricaProps){
    const {roze} = props;


    const handleSearch=(value:string, )=>{
        props.onSearch(value);
    }
/*
    const handleOkolje=(notriZunaj:string)=>{
        props.onOkolje(notriZunaj)
    }
*/

    return(
    <div id="container">
            <Search elementi={roze} onSearch={handleSearch} ></Search>
        <div id="roze_kosarica">
        <ul>
        {roze.map((el) => (
            <Link key={el.id} to={`/seznam_nakupov/${el.id}`}>
                <RastlinaFn id={el.id} ime={el.ime} latinskoIme={el.latinskoIme} slika={el.slika}></RastlinaFn>
                    </Link>
        ))}
        </ul>
        </div>
        
    </div>
    )

}



export default SeznamNakupov;