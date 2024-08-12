
import HeaderMeio from "./HeaderMeio";
import { HeaderSuperiorComponent } from "./HeaderSuperior";
import { Header } from "./styles";

export function HeaderComponent() {
    return (
        <Header>
            <HeaderSuperiorComponent></HeaderSuperiorComponent>
            <HeaderMeio></HeaderMeio>
        </Header>
    )
}
