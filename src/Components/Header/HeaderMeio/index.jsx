import React, { useState } from 'react';
import { HeaderMeioStyled } from './styles';
import logo from '../../../assets/logo-carrefour.jpg'; // Verifique o caminho
import { IoIosSearch } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { PiMoneyWavyLight } from "react-icons/pi";
import { PiBagLight } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { produtos } from '../../../../produtos';

function HeaderMeio() {
  const [termoPesquisa, setTermoPesquisa] = useState('');
  const [visivel, setVisivel] = useState(false);

  const encontrarProduto = (event) => {
    const termo = event.target.value;
    setTermoPesquisa(termo);
     setTimeout(() => {
      setVisivel(termo.length > 2) // isso retorna true ou false

     }, 800);
  }

  const produtosFiltrados = produtos.filter(produto =>
    produto.titulo.toLowerCase().includes(termoPesquisa.toLowerCase())
  );

  return (
    <HeaderMeioStyled>
      <section className='secao__logo'>
        <img src={logo} alt='Logo Carrefour' className='secao__logo-img' />
      </section>
      <section className='secao__busca'>
        <div className='secao__busca-pesquisa'>
          <input onChange={encontrarProduto} type='text' placeholder='O que você está procurando?' className='secao__busca-input' />
          <div className='secao__busca-pesquisa-subbloco' style={{ visibility: visivel ? 'visible' : 'hidden' }}>
            <ul className='secao__busca-pesquisa-subbloco-lista'>
              {produtosFiltrados.map((produto) => (
                <li key={produto.codigo} className='secao__busca-pesquisa-subbloco-item-lista'>
                  <img src={produto.imagem} className='secao__busca-presquisa-subbloco-imagem' alt="imagem do produto" />
                  <h2 className='secao__busca-pesquisa-subbloco-titulo'>{produto.titulo}</h2>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button className='secao__busca-botao'>
          <IoIosSearch className='secao__busca-icone' />
        </button>
      </section>
      <section className='secao__usuario'>
        <ul className='secao__usuario-lista'>
          <li className='secao__usuario-item-lista'>
            <IoPersonOutline className='secao__usuario-icone' />
            <p className='secao__usuario-texto'>
              <span>Bem vindo</span><br /> Entre ou Cadastre-se
            </p>
          </li>
          <li className='secao__usuario-item-lista'>
            <PiMoneyWavyLight className='secao__usuario-icone' />
            <p className='secao__usuario-texto'>
              Beneficios<br /> Meu Carrefour
            </p>
          </li>
          <li className='secao__usuario-item-lista'>
            <PiBagLight className='secao__usuario-icone' />
            <p className='secao__usuario-texto'>
              Meus<br /> Pedidos
            </p>
          </li>
          <li className='secao__usuario-item-lista'>
            <FaRegHeart className='secao__usuario-icone' />
            <p className='secao__usuario-texto'>
              Meus<br /> Favoritos
            </p>
          </li>
        </ul>
      </section>
      <section className='secao__carrinho'>
        <BsCart2 className='secao__carrinho-icone' />
      </section>
    </HeaderMeioStyled>
  )
}

export default HeaderMeio;