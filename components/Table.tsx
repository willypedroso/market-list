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
                        <Th>Action</Th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map((prod, i) => (
                            <tr key={i}>
                                <Td>{prod.name}</Td>
                                <Td>{prod.qtd}</Td>
                                <Td>R${prod.price}</Td>
                                <Td style={{ textAlign: 'center' }}><button onClick={() => props.removeProd(i)} style={{ paddingTop: '5px' }}><BsTrashFill/></button></Td>
                            </tr>
                        ))}
                        <tr>
                            <Td colSpan={3} style={{ backgroundColor: '#346770' }}><strong>Total</strong></Td>
                            <Td style={{ backgroundColor: '#346770' }}><strong>R${props.totalValue}</strong></Td>
                        </tr>
                </tbody>
            </TableMain>
        </Div>
    )
}