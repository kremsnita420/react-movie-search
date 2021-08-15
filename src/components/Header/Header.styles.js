import styled from "styled-components";

export const Wrapper = styled.div`
    background: var(--darkGrey);
    padding: 0 20px;
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 10px 0;
    margin: 0 auto;
`

export const LogoImg = styled.img`
    width: 150px;

    @media (max-width: 500px) {
        width: 100px;
    }
`

export const TMDBLogoImg = styled.img`
    width: 100px;
    
    :hover {
        cursor: pointer;
    }

    @media (max-width: 500px) {
        width: 70px;
    }
`