import { MenuEsquerdoStyled } from "./styles";
import { MdMonitor } from "react-icons/md";
import { TbBaguette } from "react-icons/tb";
import { BsBagPlus } from "react-icons/bs";
import { LiaShoppingBagSolid } from "react-icons/lia";

export function MenuEsquerdo() {

  return (
    <MenuEsquerdoStyled>
      <nav className="navegacao">
        <ul className="navegacao__lista">
          <li className="navegacao__item">
            <section className="navegacao__secao">
              <div className="navegacao__secao-container">
                <i className="navegacao__icone">
                  <MdMonitor />
                </i>
                <h2 className="navegacao__titulo">Shopping</h2>
              </div>
            </section>
          </li>
          <li className="navegacao__item">
            <section className="navegacao__secao">
              <div className="navegacao__secao-container">
                <i className="navegacao__icone">
                  <TbBaguette />
                </i>
                <h2 className="navegacao__titulo">Mercado</h2>
              </div>
            </section>
          </li>
          <li className="navegacao__item">
            <section className="navegacao__secao">
              <div className="navegacao__secao-container">
                <i className="navegacao__icone">
                  <BsBagPlus />
                </i>
                <h2 className="navegacao__titulo">Drogaria</h2>
              </div>
            </section>
          </li>
          <li className="navegacao__item">
            <section className="navegacao__secao">
              <div className="navegacao__secao-container">
                <i className="navegacao__icone">
                  <LiaShoppingBagSolid />
                </i>
                <h2 className="navegacao__titulo">Serviços</h2>
              </div>
            </section>
          </li>
        </ul>
      </nav>
    </MenuEsquerdoStyled>
  )
}