import { HeaderContainer } from "./styles";
import LogoIgnite from '../../assets/Logo.svg';
import { Timer, Scroll } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <HeaderContainer>
            <img src={LogoIgnite}></img>
            <nav>
                <NavLink to="/" title='Timer'>
                    <Timer size={24}/>
                </NavLink>
                <NavLink to="/history" title='Histórico'>
                    <Scroll size={24}/>
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}