import React from "react";
import { myPokemons } from "../../data/gen1";
import { GetRazaDescubierta } from "../../functions/utils"

const PokeCartasFisicas = ({ name, types }) => {
  //casos especificos como castform
  if(name === "castform"){
    return (
      <div className="container-evolution mt-4">
        <h4 className="w-100 mb-4 section-title">Razas</h4>
        <div className="">
          {
            myPokemons.map((item, index) => {
              //console.log(item.Nombre + '===' + name + ':' + (item.Nombre === name));
              if (item.Nombre.toLowerCase().includes("castform")) {
                // if (GetRazaDescubierta(item.Nombre.toLowerCase(), item.Raza.toLowerCase())) {
                if (true) {
                  console.log('/cartasFisicas/' + item.Nombre + '_' + item.Raza + '.png')
                  return (
                    <div className="text-center">
                      <img className="carta-fisica"
                        src={'/cartasFisicas/' + item.Nombre + '_' + item.Raza + '.png'}
                        width={747 * 0.35}
                        height={1038 * 0.35}
                      />
                    </div>
                  );
                }
                else {
                  return (
                    <div className="text-center">
                      <img
                        className="animation-up-down text-center"
                        src={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Question_mark_white_icon.svg/1200px-Question_mark_white_icon.svg.png"}
                        width={747 * 0.35}
                        height={1038 * 0.35}
                      />
                    </div>
                  );
                }
  
              }
            })
          }
        </div>
      </div>
    );
  }
  //estos son para todos los pokemon
  else{
    return (
      <div className="container-evolution mt-4">
        <h4 className="w-100 mb-4 section-title">Razas</h4>
        <div className="">
          {
            myPokemons.map((item, index) => {
              //console.log(item.Nombre + '===' + name + ':' + (item.Nombre === name));
              if (item.Nombre.toLowerCase() === name) {
                // if (GetRazaDescubierta(item.Nombre.toLowerCase(), item.Raza.toLowerCase())) {
                if (true) {
                  console.log('/cartasFisicas/' + item.Nombre + '_' + item.Raza + '.png')
                  return (
                    <div className="text-center">
                      <img className="carta-fisica"
                        src={'/cartasFisicas/' + item.Nombre + '_' + item.Raza + '.png'}
                        width={747 * 0.35}
                        height={1038 * 0.35}
                      />
                    </div>
                  );
                }
                else {
                  return (
                    <div className="text-center">
                      <img
                        className="animation-up-down text-center"
                        src={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Question_mark_white_icon.svg/1200px-Question_mark_white_icon.svg.png"}
                        width={747 * 0.35}
                        height={1038 * 0.35}
                      />
                    </div>
                  );
                }
  
              }
              else {
                return (<></>)
              }
            })
          }
        </div>
      </div>
    );
  }
  
};

export default PokeCartasFisicas;
