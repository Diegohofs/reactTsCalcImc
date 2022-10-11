import styled from "styled-components"

export const Wrapper = styled.div`
    max-width: 900px;
    margin: 1rem auto;
    padding: 1rem 0.5rem;
`

export const Head = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme['gray-900']};
    padding: 3rem;

    @media (max-width: 770px) {
        padding: 2rem;
    }
`

export const Footer = styled.div`
    width: 100%;
    padding-top: 3rem;
    display: flex;
    justify-content: right;
    padding-right: 4rem;

    @media (max-width: 770px) {
        justify-content: center;
        margin-top: 1rem;
        padding-top: 0;
    }

`

export const Main = styled.div`
    display: flex;
    max-width: 900px;
    margin: auto;

    
    @media (max-width: 770px) {
        flex: 1;
        flex-direction: column;
        padding: 0 1.25rem;
    }

`

export const ContentLeft = styled.div`
    flex: 1;
    margin-right: 40px;

    h1 {
        margin: 0;
        font-size: 2.5rem;
    }

    p {
        margin-bottom: 2.5rem;
    }

    @media (max-width: 770px) {
        margin-right: 0;
    }
`

export const ContentRight = styled.div`
    flex: 1;
    margin-left: 40px;
    display: flex;

    @media (max-width: 770px) {
        margin-left: 0;
        margin-top: 2rem;
    }
`

export const Input = styled.input`
    border-top: 0;
    border-left: 0;
    border-right: 0;
    width: 100%;
    padding: 10px 2px;
    margin-bottom: 20px;
    background: transparent;
    outline: 0;
    color: ${props => props.theme['gray-300']};
    
    ::placeholder {
        color: ${props => props.theme['gray-400']};
    }

    :disabled {
        cursor: not-allowed;
        opacity: .5;
    }
`

export const Button = styled.button`
    background-color: ${props => props.theme['green-700']};
    color: ${props => props.theme['gray-100']};
    font-weight: bold;
    width: 100%;
    padding: 1.5rem 0;
    cursor: pointer;
    border-radius: 8px;
    margin-top: 2.5rem;
    border: 0;

    transition: background-color 0.5s;

    :hover {
        background-color: ${props => props.theme['green-500']};
        color: ${props => props.theme.white};
    }

    :disabled {
        cursor: not-allowed;
        opacity: .5;
    }
`

export const BoxContainer = styled.div`
    flex: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    @media (max-width: 430px) {
        grid-template-columns: 1fr;
    }
`

export const BigBoxContainer = styled.div`
    flex: 1;
    display: grid;
    gap: 20px;

`

export const ArrowLeftImg = styled.div`
    position: absolute;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -26px;
    margin-top: 145px;

    svg {
        background-color: ${props => props.theme['green-700']};
        border-radius: 50%;

        transition: background-color 0.7s;
        transition: color 0.7s;

        :hover {
            background-color: ${props => props.theme.white};
            color: ${props => props.theme['green-700']};
        }
    }

    @media (max-width: 770px) {
        margin-top: 0;
        margin-left: 0;
        
        svg {
            border-radius: 10px;
        }
    }
`


