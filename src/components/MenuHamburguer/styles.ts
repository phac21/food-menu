import styled from 'styled-components';

interface MenuProps {
  isOpen: boolean
}

export const Container = styled.nav<MenuProps>`
  background-color: ${props => props.theme["brown"]};
  height: 94px;
  display: flex;
  align-items: center;
  font-size: 18px;
  padding: 0px;
  justify-content: center;

  ul {
    display: flex;
    flex-direction: ${(props) => (props.isOpen ? "column" : "row") };
    gap: 2rem;
    padding-left: 0px;
  }

  li {
    list-style-type: none;
  }
  a {
    color: white;
    font-weight: 700;
    text-decoration: none;
  }

  @media(max-width: 425px) {
    justify-content: flex-end;
    margin-top: 0;
    border-radius: 0;

    ul {
      flex-direction: column;
      position: absolute;
      top: 2.5rem;
      left: 0px;
      padding-left: 0px;
      width: 100%;
      background-color: ${props => props.theme["brown"]};;
    }

    li {
      padding: 0.5rem;
    }
  }

`

export const ContentMobile = styled.div`
  display: none;

  @media(max-width: 425px) {
    display: flex;
    padding-right: 20px;
  }
`