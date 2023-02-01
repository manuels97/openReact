import React, { useState } from 'react';


let red=0;
let green= 200;
let blue= 150;

const randomColor=()=> {
    return "backgroundColor=`rgb(${red},${green},${blue})  `"
}










const Ej = () => {

    

    const [colores, setColores] = useState("blue");

    const entra=()=>{
        setColores("red")
        
    }
    const sale=()=>{
        setColores("green")
    }

    const dobleC=()=>{
        setColores("purple")
    }



    let rectangulo;
    let mouse=true
    const mouseE=()=>{
       
        return mouse=false
    }
    if(mouse){  
            rectangulo= <div style={ {width: '255px', height: '255px', backgroundColor:colores} }
            
            onMouseMove={entra}
            onMouseOut={sale}
            onDoubleClick={dobleC}
            >
                
                    </div>
        }
        else {
            console.log("SDSADAD")
            rectangulo= <div style={ {width: '255px', height: '255px', backgroundColor:'red'} }
            ></div>
        }




    return (
        <div>
           
             {rectangulo}
        </div>
    );
}

export default Ej;
