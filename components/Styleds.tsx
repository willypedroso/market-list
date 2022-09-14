import styled from "styled-components";

const Main = styled.div`
    font-family: monospace;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

const Title = styled.h1`
    font-size: 2rem;
    color: black;
    background-color: #3e3eb1;
    padding: 20px;
    text-align: center;
    max-width: 300px;
    border-radius: 15px;
    align-self: center;
`;

const Input = styled.input`
    font-family: monospace;
    padding: 5px;
    margin: 5px;
`;

const Div = styled.div`
    font-family: monospace;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Button = styled.button`
    font-family: monospace;
    background-color: #3d3dcd;
    font-size: 1.5rem;
    align-self: center;
    margin: 15px;
`;

const Th = styled.th`
  border: 2px black solid;
  padding: 10px;
  background-color: #b0b0b0;
`;

const Td = styled.td`
  border: 2px black solid;
  padding: 10px;
`;

export {
    Main,
    Title,
    Input,
    Div,
    Button,
    Th,
    Td
};