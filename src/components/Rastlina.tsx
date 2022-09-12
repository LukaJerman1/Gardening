import React from 'react';



interface RastlinaProps{
    id: number;
    ime: string;
    latinskoIme: string;
    slika?: HTMLInputElement | string;
    
}



function RastlinaFn(props : RastlinaProps){

    


    return <li>{props.ime}<br />
    {props.latinskoIme}<br/><br/>
    <img src={String(props.slika)} height="200px"/> <br />
    
    </li>;
}

//<img src={String(props.slika)} height="200px"/> <br />

export default RastlinaFn;