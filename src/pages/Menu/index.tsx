import React from 'react';
import MenuHamburguer from '../../components/MenuHamburguer';
import { Container } from './styles';

const Menu: React.FC = () => {
  return (
  <Container>
    <MenuHamburguer/>
    <img src="https://preodemo.gumlet.io/usr/venue/7602/web/646fbf3abf9d0.png" alt="" />
  </Container>
  )
}

export default Menu;