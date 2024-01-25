import React, { useEffect, useState } from 'react';
import { ContentMobile, Container } from './styles';
import { TiThMenu } from 'react-icons/ti';
import { IoCloseSharp } from 'react-icons/io5';


const MenuHamburguer: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen);
    }
    const handleResize = () => {
        if (window.innerWidth > 768 && !menuOpen){
            setMenuOpen(true);
        }
        if (window.innerWidth <  426 && menuOpen){
            setMenuOpen(false);
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [menuOpen])
    return (
    <Container isOpen={menuOpen}>
        <ContentMobile onClick={toggleMenu}>
            {menuOpen ? <IoCloseSharp color='red'/> : <TiThMenu color='white'/>}
        </ContentMobile>
        {menuOpen || window.innerWidth > 768 ?         
            <ul>
                <li><a href="/">MENU</a></li>
                <li><a href="/">ENTRAR</a></li>
                <li><a href="/">CONTATO</a></li>
            </ul>
            : <></>
        }


    </Container>
  );
}

export default MenuHamburguer;