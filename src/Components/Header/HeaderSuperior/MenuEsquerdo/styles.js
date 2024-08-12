import styled from "styled-components";
import { HeaderComponent } from '../../index';

export const MenuEsquerdoStyled = styled.div`
gap: 10px;


.navegacao {
  display: flex;
  gap: 10px;
}

.navegacao__lista {
    display: flex;
    gap: 5px;
    align-items: flex-end;

}

.navegacao__item { 
height: 35px;
padding:  0 15px ;
display: flex;
align-items: flex-end;
border-radius: 5px 5px 0 0 ;
background-color: #4073CE;

&:hover {
    background-color: #f7f7f7;
    cursor: pointer;
    color:#1E5BC6;
}

}

.navegacao__secao {
}

.navegacao__secao-container {
    padding-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 5px;

}

.navegacao__icone {
    font-size: 18px;

}

.navegacao__titulo {
    font-size: 12px;
    text-transform: uppercase;
    font-weight: bold;

}
`