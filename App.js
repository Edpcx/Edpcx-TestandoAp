import React, { useEffect, useState } from "react";
import{ScrollView} from "react-native"
import {TouchableOpacity } from "react-native"
import * as C from "./styled"
import axios from 'axios';

const url = "http://192.168.10.102:5000/produto/"

export default function App() {
  const [mostra , setMostra] = useState()
  const [adicionarProduto, setAdicionarProduto] = useState()

  useEffect(() => {
    getProduct() 
  },[])
  // buscar
  async function getProduct(){
    await axios.get(url + 'BuscarProduto')
     .then(response => {
      setMostra(response?.data)
    })
     .catch(error => console.error(error))
  }
  // adicionar
  async function addNewProduct(){
    await axios.post(url + "CriarProduto", {
      nome: "Ovo p",
      preco: 32,
      descricao: "Badeija",
      status: 1  
    })
    .then(response =>{
     console.log(response)
    })
    .catch(error => console.error(error))
  }

return(
  <ScrollView>
  <C.Container>
        <C.ViewContainer>
          <C.TextView>teste</C.TextView>
        </C.ViewContainer>
        <C.ViewContainer>
          <C.TextView>teste</C.TextView>
        </C.ViewContainer>
        <C.ViewContainer>
          <C.TextView>Teste3</C.TextView>
          
        </C.ViewContainer>
        <C.ViewContainer>
          <C.TextView>Teste4</C.TextView>
        </C.ViewContainer>
        <C.ViewContainer>
          <C.TextView>Teste5</C.TextView>
        </C.ViewContainer>
      <TouchableOpacity onPress={addNewProduct}>
          <C.Texto>Teste</C.Texto>
      </TouchableOpacity>
  </C.Container>
 </ScrollView>   
)
}    