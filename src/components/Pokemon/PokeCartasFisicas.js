import React from "react";
import { myPokemons } from "../../data/gen1";
import {GetRazaDescubierta} from "../../functions/utils"

const PokeCartasFisicas = ({ name, types }) => {
  return (
    <div className="container-evolution mt-4">
      <h4 className="w-100 mb-4 section-title">Razas</h4>
      <div className="carta-fisica-container">
        {
          myPokemons.map((item, index) => {
            //console.log(item.Nombre + '===' + name + ':' + (item.Nombre === name));
            if (item.Nombre.toLowerCase() === name) {
              if (GetRazaDescubierta(item.Nombre.toLowerCase(), item.Raza.toLowerCase())){
                return (
                  <img className="carta-fisica"
                    src={'/cartasFisicas/' + item.Nombre + '_' + item.Raza + '.png'}
                    width={747 * 0.6}
                    height={1038 * 0.6}
                  />
                );
              }
              else{
                return(<img
                  //className="animation-up-down"
                  src={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Question_mark_white_icon.svg/1200px-Question_mark_white_icon.svg.png"}
                  width={747 * 0.6}
                    height={1038 * 0.6}
                />);
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
};

export default PokeCartasFisicas;
