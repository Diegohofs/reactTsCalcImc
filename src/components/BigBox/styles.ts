import styled from "styled-components"

export const Box = styled.div`
    flex: 1;
    border-radius: 10px;
    background: ${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;

    div {
        width: 3.5rem;
        height: 3.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0,0,0,.1);
        border-radius: 50%;
        margin-bottom: 1rem;
    }

    p {
        margin-top: 0.3rem;
    }

    span {
        font-size: 0.8rem;
        margin-top: 1rem;
    }
`

