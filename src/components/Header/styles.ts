import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: ${props => props.theme["brown"]};
    padding: 3rem 1rem 1rem;
`;
export const HeaderContent = styled.header`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
`;
