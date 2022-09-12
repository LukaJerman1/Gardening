import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Telo from './components/Telo';
import Test from './components/Test';
import More from './components/More';
import Vrtnarji from './components/Vrtnarji';
import Navigacija from './components/Navigacija';
import Vrtnarstvo from './components/OVrtnarstvu';
import Forma from './components/Forma';
import Kosarica from './components/Kosarica';
import RozaVKosari from './components/RozaVKosari';
import SeznamNakupov from './components/SeznamNakupov';
import RozaNakup from './components/RozaNakup';
import UrejanjeOkolice from './components/UrejanjeOkolice';


interface Rastlina {
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


let bambus : Rastlina={
  id:0,
  ime:"Bambus",
  latinskoIme:"Bambusoideae",
  koda: 373574578,
  cena: 15,
  velikost: 200,
  notranjaZunanja: "notranja",
  zahtevnostVzdrevanja:"Srednje",
  barvaCvetov:"Zelena",
  opis: "Rastlina nenehno raste.",
  slika: require("./components/roze/bambus.jpg")
}

let orhideja : Rastlina={
  id:1,
  ime:"Orhideja",
  latinskoIme:"Orchidaceae",
  koda:123415,
  cena:40,
  velikost:30,
  notranjaZunanja:"notranja",
  zahtevnostVzdrevanja:"Zahtevno",
  barvaCvetov:"Vijolična",
  opis:"Lepa roža.",
  slika: require("./components/roze/orhideja.jpg")
}

let soncnica : Rastlina={
  id:2,
  ime:"Sončnica",
  latinskoIme:"Helianthus",
  koda:141244,
  cena:30,
  velikost:80,
  notranjaZunanja:"zunanja",
  zahtevnostVzdrevanja:"Srednje",
  barvaCvetov:"Rumena",
  opis:"Lepa kot sonce.",
  slika:require("./components/roze/soncnica.jpg")

}



interface Vrtnar{
  id: number;
  ime: string;
  priimek:string;
  starost:number;
  specializacija: string;
  opis: string;
  slika?:string;
}


let joza : Vrtnar ={
  id:0,
  ime:"Jozef",
  priimek:"Stefan",
  starost: 65,
  specializacija: "Krompir",
  opis:"Fajn poba iz Haloz. Ve kak je na stvari.",
  slika:require("./components/vrtnarija/vrtnar1.jpg")

}

let franca : Vrtnar={
  id:1,
  ime:"Franc",
  priimek:"Novak",
  starost:68,
  specializacija: "Fizol",
  opis:"Z vrtnarjenjem se ukvarjam ze vec kot 50 let, nikadar mi ni bilo pri srcu.",
  slika:require("./components/vrtnarija/vrtnar2.jpg")
}
  /*
  const test=[];
  test.push(bambus);
  test.push(orhideja);
  test.push(soncnica);
  */

      //elementi[0]=bambus;
      //elementi[1]=orhideja;
      //elementi.push(orhideja);
      //elementi[2]=soncnica;

function App() {

    
  const [vrtnarji, setVrtnarji] = React.useState<Vrtnar[]>([]);
    
  vrtnarji[0]=joza;
  vrtnarji[1]=franca;
  

  const [elementi, setElementi] = React.useState<Rastlina[]>([]);
    
      //elementi[0]=bambus;
      //elementi[1]=orhideja;
      //elementi.push(orhideja);
      //elementi[2]=soncnica;
  /*
      const naredi = () =>{
        let noviArray = Array.from(elementi);
        noviArray.push(bambus);
        noviArray.push(orhideja);
        noviArray.push(soncnica);

        setElementi(noviArray);

      }
  */
  
  //elementi.push(soncnica);
  

  
  const [rozeKosarica, setRozeKosarica] = React.useState<Rastlina[]>([]);

  const dodajKosarica = (roza : Rastlina) =>{
    let noveRoze = Array.from(rozeKosarica);
    noveRoze.push(roza);
    setRozeKosarica(noveRoze);
  }

  const odstraniKosarica = (roza : Rastlina) =>{
    /*
    let noveRoze = Array.from(rozeKosarica);
    let index = noveRoze.indexOf(roza);
    noveRoze.filter(element =>{
      return element !== roza;
    });
    */
    /*let index = noveRoze.indexOf(roza);

    if ( index > -1 ){
      noveRoze.splice(index,1);
    }*/
    setRozeKosarica(rozeKosarica.filter(item => item !== roza));
  }

  const niZaloge=(roza : Rastlina) =>{
    /*
    let zaloga = Array.from(elementi);
    let index = zaloga.indexOf(roza);
    if ( index > -1 ){
      zaloga.splice(index,1);
    }*/
    setElementi(elementi.filter(item => item !== roza));
    /*
    let noveRoze = Array.from(rozeKosarica);
    let index2 = noveRoze.indexOf(roza);
    if ( index > -1 ){
      noveRoze.splice(index2,1);
    }*/
    setRozeKosarica(rozeKosarica.filter(item => item !== roza));

  }

/*
  const handleMoreChange = (noviElementi: Rastlina[]) => {
    setElementi(noviElementi);
  }
*/

  const handleAdd = (element: Rastlina) => {
    let noviElementi = Array.from(elementi);
    noviElementi.push(element);
    setElementi(noviElementi);
  }


  const [nakup, setNakup] = React.useState<Rastlina[]>([]);

  const ustvariNakup = () =>{
    let nakupPolje = Array.from(rozeKosarica);
    setNakup(nakupPolje);
 
  }

  const test =(e: React.MouseEvent<HTMLElement>)=>{
    let el = Array.from(elementi);
    el.push(bambus);
    el.push(orhideja);
    el.push(soncnica);
    setElementi(el);
  }

  
  const [preverjanje, setPreverjanje] = React.useState<boolean>(false);


  const ustvariNakupFunction = () =>{

   
    let noviArray = Array.from(rozeKosarica);
    console.log(noviArray);
    for(let i =0;i<noviArray.length;i++){
      if(noviArray[i].notranjaZunanja === "zunanja"){
        setPreverjanje(true);
      }
    }

    let nakupPolje = Array.from(rozeKosarica);
    let stariNakup = Array.from(nakup);
    let nic = [];
    if(stariNakup !== []){
      for(let i =0; i< nakupPolje.length;i++){
        stariNakup.push(nakupPolje[i]);
      }
      setNakup(stariNakup);
    }else{
      setNakup(nakupPolje);
    }
    setRozeKosarica([]);
    

    
    
    
  }

  //<Route path="/" element={<Telo onAdd={handleAdd} elementi={elementi}/>} />


  const [search, setSearch] = React.useState<Rastlina[]>([]);

  const handleSearch=(value:string)=>{
    let iskanje = Array.from(search);
    if(iskanje.length === 0){
      setSearch(nakup);
    }

    let noviArray = Array.from(nakup);

    let zaNapolnit = [];
    
      for(let i = 0; i < noviArray.length;i++){
        if(value === "" ){
          setNakup(search);
          continue;
        }
        else if(noviArray[i].ime === value){
          zaNapolnit.push(noviArray[i]);
          setNakup(zaNapolnit);
        }else{
          //alert(noviArray[i] + " zgublen");
          console.log(noviArray[i] + " zgublen");
        }
      }
      

      //alert(notriZunaj);
      

    //setElementi(noviArray);
    //alert(value);
  }

      
  const preveriZunanje = () =>{
    
  }


  const spremeniElement=(element: Rastlina)=>{
    let noviArray = Array.from(elementi);
    for(let i =0;i<noviArray.length;i++){
      if(noviArray[i].id == element.id){
        noviArray[i] = element;
      }
    }
    setElementi(noviArray);
  }
  
  

  return (

    

    <Router>
      <button id="test" onClick={test}>Test</button>
      
      <Navigacija naslov="Vrtnarstvo" info={preverjanje}></Navigacija>

      <Routes>

        <Route path="/" element={<Telo elementi={elementi} onAdd={handleAdd}></Telo>}></Route>
        <Route path="/:id" element={<More elementi={elementi} onChange={dodajKosarica} zaloge={niZaloge} onAdd={spremeniElement}></More>} />
       
        <Route path="/vrtnarstvo" element={<Vrtnarstvo elementi={vrtnarji}></Vrtnarstvo>} />
        <Route path="/vrtnarstvo/:id" element={<Vrtnarji elementi={vrtnarji}></Vrtnarji>} />

        <Route path="/kosarica" element={<Kosarica roze={rozeKosarica} ustvariNakup={ustvariNakupFunction}></Kosarica>} />
        <Route path="/kosarica/:id" element={<RozaVKosari elementi={rozeKosarica} onChange={odstraniKosarica}></RozaVKosari>} />

        <Route path="/seznam_nakupov" element={<SeznamNakupov roze={nakup} onSearch={handleSearch} ></SeznamNakupov>}></Route>
        <Route path="/seznam_nakupov/:id" element={<RozaNakup elementi={nakup} ></RozaNakup>} />

        <Route path="/urejanje_okolice" element={<UrejanjeOkolice></UrejanjeOkolice>} />

      </Routes>

    </Router>
  );
}

export default App;
