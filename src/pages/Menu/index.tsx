import React from 'react';
import MenuHamburguer from '../../components/MenuHamburguer';
import { Container } from './styles';
import banner from'../../assets/banner.svg';

const Menu: React.FC = () => {
  return (
  <Container>
    <MenuHamburguer/>
    <img src={banner} alt="banner contendo hamburguer" />
  </Container>
  )
}

export default Menu;