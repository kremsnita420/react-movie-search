import styled from "styled-components";


export const Image = styled.img`
    width: 100%;
    max-width: 720px;
    transition: all .3s;
    object-fit: cover;
    border-radius: 20px;
    animation: animateThumb 1s;


    :hover {
        opacity: ${(props) => props.clickable ? "1" : "0.8"};
        cursor: ${(props) => props.clickable ? "unset" : "pointer"} ;
        
    }

    @keyframes animateThumb {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`

