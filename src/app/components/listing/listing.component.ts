import { Component, OnInit } from '@angular/core';
import { Lista } from '../../models/lista.model';
import { ListaItem } from 'src/app/models/lista-item.model';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  list: Lista[];

  constructor(
  ) {
    this.list = [
      new Lista('Hamburguesas', [
        (new ListaItem('Maverick', 4.5, 'Lechuga, tomate, cebolla, carne, doble de jamón con queso y huevo')),
        new ListaItem('Bacon con queso', 4),
        new ListaItem('Con queso', 3.5),
        new ListaItem('Crispy Chicken', 4.50, 'Pollo rebozado crujiente')
      ]),
      new Lista('Perritos', [
        new ListaItem('Normal', 2),
        new ListaItem('Maverick', 3, 'Salchicha, lechuga, bacon, queso y cebolla crujiente')
      ]),
      new Lista('Sandwich', [
        new ListaItem('Mixto', 3, 'Jamón y queso'),
        new ListaItem('Vegetal', 3.5, 'Lechuga, tomate, cebolla, espárrago, atún y huevo cocido'),
        new ListaItem('Maverick', 4.5, 'Tres capas dobles de jamón, queso y bacon, lechuga, tomate, cebolla, espárragos, atún y huevo')
      ]),
      new Lista('Raciones', [
        new ListaItem('Patatas Maverick', 4.5),
        new ListaItem('Torrezno soriano', 2.7),
        new ListaItem('Morcilla', 4.8),
        new ListaItem('Ensaladilla rusa', 3.5),
        new ListaItem('Patatas Ali-Oli', 3.5),
        new ListaItem('Langostinos a la plancha', 4.5),
        new ListaItem('Mejillones a la marinera', 4.8),
        new ListaItem('Ración de oreja', 4.8),
        new ListaItem('Pincho moruno con patatas y pimientos', 2.5),
        new ListaItem('Chorizo al vino', 3.5),
        new ListaItem('Ración de croquetas', 5.5, '5 unidades'),
        new ListaItem('Ración de patatas Ali-Oli', 4.5),
        new ListaItem('Sartén de huevos', 6.5),
        new ListaItem('Plato combinados', 6.5),
      ]),
    ];
  }

  ngOnInit(): void {
  }

}
