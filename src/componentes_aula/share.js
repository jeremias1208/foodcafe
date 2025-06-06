import React from "react";
import {  Share} from "react-native";


export default function Compartilhar({ tipo}) {
 
  const handleCompartilhar = async () => {
    try {
      await Share.share({
        message: ` Hino  ${tipo.numero} - ${tipo.titulo}\n\n${tipo.letra.replace(
        /<[^>]*>/g,
          ""
        )}`,
      });
    } catch (error) {
      console.error("Erro ao compartilhar:", error.message);
    }
  };
  

}