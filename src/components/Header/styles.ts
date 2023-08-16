import { styled } from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${(props) => props.theme.bgColor};
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img{
        width: 120px;
    }
`