import React, { useState } from "react";
import "./App.css";

function Button({onClick} : any) {
 

  //un componente riceve i parametri tramite un oggetto, quando noi definiamo una funzione, passiamo un oggetto che può chiamarsi come vogliamo (props).
  //Se voglio far sì che cliccando mi spunti un valore randomico devo gestire lo stato nel livello più alto. se fosse un componente più strutturato 

  return (
    <>
      {" "}
      <button
        onClick={onClick} //così passiamo il parametro al bottone
      >
        Genera numero
      </button>
    </>
  );
}

interface PropsLabel {
  children: JSX.Element; //oppure ReactNode, se mettessumo return ( {null} ) possiamo usare ReactNode
}
//se label passa la prop a un subLabel
function Label({children} : PropsLabel) {
  return (
  <>
  <SubLabel>{children}</SubLabel>
  </>);
}

function SubLabel({children}: PropsLabel) {
console.log('rendering SubLabel')
  return(
    <>
    {children}
    </>
  )
  

}

function App() {
  const [number, setNumber] = useState<number>(Math.random());
  const onClick = () => {
    const random: number = Math.random();
    setNumber(random);
  };

  return (
    <>
      <Button onClick={onClick} />
      <Label><div>{number}</div></Label>
    </>
  );
}

export default App;
