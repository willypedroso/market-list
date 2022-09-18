import { useRef } from "react";
import { Button, Div, Input } from "./Styleds";

export default function Form(props) {

    const prodInput = useRef<HTMLInputElement>(null);

    const keyHandler = (e) => {
        if(e.key == 'Enter') {
            props.handleClickButton();
            prodInput?.current.focus();
        }
    }

    return (
        <Div>
                <div style={{ textAlign: 'center' }}>
                    
                    <Input type="text" ref={prodInput} placeholder="Product" value={props.productName} onChange={e => props.setProductName(e.target.value)}></Input>
                    
                    <Input type="number" placeholder="Qtd" style={{ width: "5em" }} value={props.productQtd} onChange={e => props.setProductQtd(e.target.value)}></Input>
                    
                    <Input type="number" placeholder="R$" style={{ width: "5em" }} value={props.productPrice} onChange={e => props.setProductPrice(e.target.value)} onKeyUp={keyHandler}></Input>
                
                </div>
                <Div>
                    <Button onClick={props.handleClickButton}>Register</Button>
                </Div>
        </Div>
    )
}