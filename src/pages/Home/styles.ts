import { styled } from "styled-components";
import background from '../../assets/home-background.jpg'

export const MainHome = styled.main`
    background-image: ${(props) => props.theme.bgImage};
    background-repeat: ${(props) => props.theme.bgRepeat};
    background-size: ${(props) => props.theme.bgSize};
    min-height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .selecao{
        background-color: ${(props) => props.theme.secondary};
        border-radius: 10px;
        width: 40%;
        padding: 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        color: white;
    }

    .escolha{
        display: flex;
        gap: 1rem;
    }

    .escolha img{
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 5px solid white;
        cursor: pointer;

        &:hover{
            border: 5px solid green;
            box-shadow: 0px 4px 10px black;
        }
    }
`