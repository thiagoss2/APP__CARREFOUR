import React from 'react'
import { CardStyled } from './styles';

export default function Card() {

    const empresas = [
        {
             id: 1,
             nome: "Logtech",
             cnpj: "123456789",
             endereco: "Rua manoel fonseca n° 200"
        },
        {
             id: 2,
             nome: "Gigabyte",
             cnpj: "987654321",
             endereco: "Rua andradas n° 100"
        },
        {
             id: 3,
             nome: "Earmor",
             cnpj: "456789123",
             endereco: "Rua da consolação n° 300"
        }
   ];
   
  return (
    <CardStyled>
      {empresas.map(empresa => (
        <ul key={empresa.id} className='card'>
          <h2>{empresa.nome}</h2>
          <p>{empresa.cnpj}</p>
          <p>{empresa.endereco}</p>
        </ul>
      ))}
    </CardStyled>
  )
}






