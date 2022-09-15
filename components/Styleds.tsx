import styled from "styled-components";

const Body = styled.body`
  background-image: linear-gradient(#57ADBD, #B8EAF2);
  margin: -8px;
  height: 100vh;
`;

const Main = styled.div`
    font-family: monospace;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

const Title = styled.h1`
    font-size: 2rem;
    color: black;
    background-color: #346770;
    box-shadow: 4px 4px 10px black;
    padding: 20px;
    text-align: center;
    max-width: 300px;
    border-radius: 15px;
    align-self: center;
`;

const Input = styled.input`
    font-family: monospace;
    background-color: #B8EAF2;
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
    background-color: #57ADBD;
    font-size: 1.5rem;
    align-self: center;
    margin: 15px;
`;

const TableMain = styled.table`
  border-collapse: collapse;
  box-shadow: 4px 4px 10px black;
`;

const Th = styled.th`
  border: 2px black solid;
  padding: 10px;
  background-color: #346770;
`;

const Td = styled.td`
  border: 2px black solid;
  padding: 10px;
  background-color: #B8EAF2;
`;

export {
    Body,
    Main,
    Title,
    Input,
    Div,
    Button,
    TableMain,
    Th,
    Td
};