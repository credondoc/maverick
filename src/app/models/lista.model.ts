import { ListaItem } from './lista-item.model';

export class Lista {

    name: string;
    items: ListaItem[];

    constructor(
        name: string,
        items: ListaItem[]
    ) {
        this.name = name;
        this.items = items;
    }

}
