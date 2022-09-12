import internal from 'stream';
import React, { ChangeEvent, FormEvent } from 'react';
import { idText, isPropertyDeclaration, setConstantValue } from 'typescript';


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


interface rastlinaProps{


    onAdd:(rastlina: Rastlina) => any;
    id: number; 
    
}

function Add(props: rastlinaProps){

    //const {elementi} = props
    

    const [ime, setIme] = React.useState<string>("");
    const [latinskoIme, setLatinskoIme] = React.useState<string>(""); 
    const [koda, setKoda] = React.useState<number>(0); 
    const [cena, setCena] = React.useState<number>(0);
    const [velikost, setVelikost] = React.useState<number>(0); 
    const [notranjaZunanja, setNotranjaZunanja] = React.useState<string>(""); 
    const [zahtevnostVzdrevanja, setZahtevnostVzdrevanja] = React.useState<string>("");
    const [barvaCvetov, setBarvaCvetov] = React.useState<string>(""); 
    const [opis, setOpis] = React.useState<string>(""); 
    const [slika, setSlika] = React.useState<HTMLInputElement>();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        props.onAdd({
            id: props.id, ime: ime , latinskoIme: latinskoIme,
            koda: koda, cena: cena, velikost:velikost, notranjaZunanja:notranjaZunanja,
            zahtevnostVzdrevanja:zahtevnostVzdrevanja,barvaCvetov:barvaCvetov, opis:opis, slika: slika
        });
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        //setRastlina(e.target.value);
        setIme(e.target.value);
    }

    const handleLatIme = (e: ChangeEvent<HTMLInputElement>) => {
        //setRastlina(e.target.value);
        setLatinskoIme(e.target.value);
    }

    const handleKoda = (e: ChangeEvent<HTMLInputElement>) => {
        //setRastlina(e.target.value);
        setKoda(parseInt(e.target.value));
    }

    const handleCena = (e: ChangeEvent<HTMLInputElement>) => {
        //setRastlina(e.target.value);
        setCena(parseInt(e.target.value));
    }

    const handleVelikost = (e: ChangeEvent<HTMLInputElement>) => {
        //setRastlina(e.target.value);
        setVelikost(parseInt(e.target.value));
    }

    const handleNotranjaZunanja = (e: ChangeEvent<HTMLSelectElement>) => {
        //setRastlina(e.target.value);
        setNotranjaZunanja(e.target.value);
    }

    const handleZahtevnostVzdrevanja = (e: ChangeEvent<HTMLSelectElement>) => {
        //setRastlina(e.target.value);
        setZahtevnostVzdrevanja(e.target.value);
    }
    
    const handleBarvaCvetov = (e: ChangeEvent<HTMLInputElement>) => {
        //setRastlina(e.target.value);
        setBarvaCvetov(e.target.value);
    }

    const handleSetOpis = (e: ChangeEvent<HTMLTextAreaElement>) => {
        //setRastlina(e.target.value);
        setOpis(e.target.value);
    }

    const handleSlika = async (e: ChangeEvent<HTMLInputElement>) =>{
        const files = e.target.files

        if ( files && files.length > 0){
            
            const base64=await convertBase64(files[0]);
            console.log(base64);
            setSlika(base64);
        }

    }

    const convertBase64=(file : any)=>{
        return new Promise<any>((resolve,reject)=>{

            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () =>{ 
                resolve(fileReader.result); 
            }

            fileReader.onerror = (error) =>{
                reject(error);
            }
        })
    }


    return(
        <form onSubmit={handleSubmit}>
            <label>Ime:
                <input type="text" value={ime} onChange={handleChange} />
            </label>
            <label>Latinsko ime:
                <input type="text" value={latinskoIme} onChange={handleLatIme} />
            </label>
            <label>Koda:
                <input type="number" value={koda} onChange={handleKoda} />
            </label>
            <label>Cena:
                <input type="number" value={cena} onChange={handleCena} />
            </label>
            <label>Velikost:
                <input type="number" value={velikost} onChange={handleVelikost} />
            </label>
            <label>Notranja ali zunanja:
                <select value={notranjaZunanja} onChange={handleNotranjaZunanja}>
                    <option value="notranja">Notranja</option>
                    <option value="zunanja">Zunanja</option>
                </select>
            </label>
            <label>Zahtevnost vzdrzevanja:
                <select value={zahtevnostVzdrevanja} onChange={handleZahtevnostVzdrevanja}>
                    <option value="lahko">Lahko</option>
                    <option value="srednje">Srednje</option>
                    <option value="tezja">Tezje</option>
                </select>
            </label>
            <label>Barva cvetov:
                <input type="text" value={barvaCvetov} onChange={handleBarvaCvetov} />
            </label>
            <label>Opis:
                <textarea value={opis} onChange={handleSetOpis} >
                    </textarea>
            </label>
            <label>Vstavi sliko:
                <input type="file" id="myfile" name="myfile"  onChange={handleSlika}/>
            </label>


            <input type="submit" value="Dodaj" />

        </form>
    );
}

export default Add;