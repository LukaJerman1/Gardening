
import React, { ChangeEvent, FormEvent } from 'react';


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


interface VnosProps{
    elementi: Rastlina[];
    onSearch :(element: string, ) => any;
    //onOkolje: (notriZunaj:string) => any;
}


function Search(props:VnosProps){

    const {elementi} = props;

    const [value, setValue] = React.useState<string>("");
    const [notriZunaj, setNotriZunaj] = React.useState<string>("");

    const handleSearch=()=>{
       /* let noviArray = Array.from(elementi);

        noviArray.filter(item =>{
            item.ime === value
        })*/
        props.onSearch(value);
        /*
        for(let i = 0; i < elementi.length; i++){
            if(elementi[i].ime === value){

            }
        }*/
    }
/*
    const handleOkolje =()=>{
        props.onOkolje(notriZunaj)
    }
*/

    const handleChange =(e: ChangeEvent<HTMLInputElement>) => {
        //setRastlina(e.target.value);
        setValue(e.target.value);
    }

    const handleNotriZunaj =(e:ChangeEvent<HTMLSelectElement>)=>{
        setNotriZunaj(e.target.value);
    }


//<button id="serach2" onClick={handleOkolje}>Search by okolje</button>

/*
    <label>Notranja ali zunanja:
                <select value={notriZunaj} onChange={handleNotriZunaj}>
                    <option value="brez">Brez</option>
                    <option value="notranja">Notranja</option>
                    <option value="zunanja">Zunanja</option>
                </select>
            </label>
        */ 



    return(
        <div>
            <input id="search" type="text" value={value} placeholder="Vnesite ime..." onChange={handleChange}></input>
            
            <button id="search" onClick={handleSearch}>Search by name</button>
            
        </div>
    )
}


export default Search;