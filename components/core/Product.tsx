export default class Product {
    name: string
    qtd: number
    price: number
    checked: boolean
    constructor(name: string, qtd: number, price: number, checked: boolean) {
        this.name = name
        this.qtd = qtd
        this.price = price
        this.checked = checked
    }
}