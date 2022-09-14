import { Div, Th, Td } from "./Styleds";
import { BsTrashFill } from 'react-icons/bs';


export default function Table(props) {
    return (
        <Div>
            <table style={{ borderCollapse: 'collapse' }}>
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
                                <Td>{prod.price}</Td>
                                <Td style={{ textAlign: 'center' }}><button onClick={() => props.removeProd(i)} style={{ paddingTop: '5px' }}><BsTrashFill/></button></Td>
                            </tr>
                        ))}
                        <tr>
                            <Td style={{ backgroundColor: '#d0d0d0' }}>-</Td>
                            <Td style={{ backgroundColor: '#d0d0d0' }}>-</Td>
                            <Td style={{ backgroundColor: '#d0d0d0' }}>-</Td>
                            <Td>{props.totalValue}</Td>
                        </tr>
                </tbody>
            </table>
        </Div>
    )
}