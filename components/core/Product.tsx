export default class Product {
    name: string
    qtd: number
    price: number
    constructor(name: string, qtd: number, price: number) {
        this.name = name
        this.qtd = qtd
        this.price = price
    }
}