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
        (new ListaItem('Maverick', 4.5, 'Jamon, queso, lechuga, huevo frito')),
        new ListaItem('Normal', 4.5),
        new ListaItem('Queso', 3)
      ]),
      new Lista('Sandwiches', [
        new ListaItem('Maverick', 4.5),
        new ListaItem('Normal', 4.5),
        new ListaItem('Queso', 3)
      ]),
      new Lista('Perritos', [
        new ListaItem('Maverick', 4.5),
        new ListaItem('Normal', 4.5),
        new ListaItem('Queso', 3)
      ]),
      new Lista('Raciones', [
        new ListaItem('Maverick', 4.5),
        new ListaItem('Normal', 4.5),
        new ListaItem('Queso', 3)
      ]),
    ];
  }

  ngOnInit(): void {
  }

}
