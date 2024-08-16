import styled from "styled-components";

export const HeaderMeioStyled = styled.div`
padding: 0 8%;
height: 74px;
margin: 16px 0 ;
display: flex;
justify-content: space-between;
align-items: center;

.secao__logo-img {
    width: 170px;
    height: 32px;
}

.secao__busca {
    display: flex;
    border: 2px solid #1E5BC6;
    border-radius: 3px;
   
}

.secao__busca-pesquisa {
    height: 36px;
    display: flex;
    width: 427px;
    padding: 1px 2px 1px 16px;
    position: relative;
}

.secao__busca-pesquisa-subbloco {
    position: absolute;
    width: 100%;
    left: 0;
    top: 45px;
    visibility: hidden;
}

.secao__busca-pesquisa-subbloco-lista {
  

}

.secao__busca-pesquisa-subbloco-item-lista {
    display: flex;
    gap: 10px;
    align-items: center;
    border: 1px solid #4073CF;
    margin-bottom: 2px;
    border-radius: 2px;
    padding: 4px;

}

.secao__busca-presquisa-subbloco-imagem {
    width: 40px;
    height: 40px;
}.secao__busca-pesquisa-subbloco-titulo {
    color: black;
    width: 100%;
    display: block;
    box-sizing: border-box;
    font-size: 12px;
}

.secao__busca-input {
    border: none;
    outline: none;
    width: 100%;

}

.secao__busca-botao {
    width: 48px;
    border: none;
    border-left: 2px solid #1E5BC6;
    background-color: #1E5BC6;
    display: flex;
    align-items: center;
    color: #fff;
    
}
.secao__busca-icone {
    font-size: 20px;
    margin: 0 auto;
}
 
.secao__usuario {
}

.secao__usuario-lista {
  display: flex;
  align-items: center;
  gap: 30px;
}
.secao__usuario-item-lista {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    
}

.secao__usuario-icone {
    color: #1E5BC6;
    font-size: 35px;

}
.secao__usuario-texto {
    font-size: 10px;
    line-height: 13px;

}
.secao__usuario-texto span {
    font-weight: bold;
    
}

.secao__carrinho {

}

.secao__carrinho-icone {
    color: #1E5BC6;
    font-size: 35px;
}



`