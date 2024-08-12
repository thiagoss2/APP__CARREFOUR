
import MenuDireito from "./MenuDireito";
import { MenuEsquerdo } from "./MenuEsquerdo";
import { HeaderSuperiorStyled } from "./styled";

export function HeaderSuperiorComponent() {
    return (
        <>
            <HeaderSuperiorStyled>
                    <MenuEsquerdo></MenuEsquerdo>
                    <MenuDireito></MenuDireito>
            </HeaderSuperiorStyled>
        </>
    )


}