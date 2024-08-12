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
  gap: 60px;
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