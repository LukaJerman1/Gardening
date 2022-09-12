import React from 'react';
import { useParams } from 'react-router-dom';



interface Vrtnar{
    id: number;
    ime: string;
    priimek:string;
    starost:number;
    specializacija: string;
    opis: string;
    slika?:string;
}


interface VrtnarjiProps{
    elementi: Vrtnar[];
}

function Vrtnarji(props : VrtnarjiProps){
    //const {elementi} = props;
    
    const { id }: any = useParams();
    const [element, setElement] = React.useState<Vrtnar>(props.elementi[id]);
    //const [elementi, setElement] = React.useState<Vrtnar>(props.elementi[id]);

    return( 
        <div id="vrtnar">
        <li>
            <h3>Vrtnar:</h3>
            Ime: {element.ime}<br />
            Priimek: {element.priimek}<br />
            Starost: {element.starost}<br />
            Specializacija: {element.specializacija}<br />
            Opis: {element.opis}<br /><br/>
            <img src={element.slika} height="300px"></img>
        </li>
        </div>
    )
}

export default Vrtnarji;