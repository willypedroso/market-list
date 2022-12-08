import { Div, TableMain, Th, Td } from "./Styleds";
import { BsTrashFill } from 'react-icons/bs';


export default function Table(props) {
    return (
        <Div>
            <TableMain style={{ borderCollapse: 'collapse'}}>
                <thead>
                    <tr>
                        <Th>Products</Th>
                        <Th>Qtd</Th>
                        <Th>Prices</Th>
                        <Th>Checked</Th>
                        <Th>Delete</Th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map((prod, i) => (
                            <tr key={i}>
                                <Td style={{textAlign: "left"}}>{prod.name}</Td>
                                <Td><input style={{ width: "40px" }} type="number" value={prod.qtd} onChange={e => props.handleQtdChange(i, +e.target.value)} /></Td>
                                <Td>R$<input style={{ width: "60px" }} type="number" value={prod.price.toFixed(2)} onChange={e => props.handlePriceChange(i, +e.target.value)} /></Td>
                                <Td><input type="checkbox" checked={prod.checked} onChange={() => props.checkProd(i)} id={prod.name} /></Td>
                                <Td style={{ textAlign: 'center' }}><button onClick={() => props.removeProd(i)} style={{ paddingTop: '5px' }}><BsTrashFill/></button></Td>
                            </tr>
                        ))}
                        <tr>
                            <Td colSpan={3} style={{ backgroundColor: '#346770' }}><strong>Total</strong></Td>
                            <Td colSpan={2} style={{ backgroundColor: '#346770' }}><strong>R${props.totalValue}</strong></Td>
                        </tr>
                </tbody>
            </TableMain>
        </Div>
    )
}