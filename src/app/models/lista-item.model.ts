export class ListaItem {
    name: string;
    desciption: string = '';
    price: number;

    constructor(
        name: string,
        price: number,
        description?: string
    ) {
        this.name = name;
        this.price = price;
        this.desciption = description;
    }
}
