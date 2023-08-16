import { styled } from "styled-components";

export const StyledFooter = styled.footer`
    background-color: ${(props) => props.theme.bgColor};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;

    span{
        font-weight: 600;
    }
`