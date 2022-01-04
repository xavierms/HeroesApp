import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

publishers = [
  {
  id: 'DC Comics',
  desc: 'DC - Comics'
  },
  {
    id: 'Marvel Comics',
    desc: 'Marvel - Comics'
  }
]

heroe:Heroe={
  superhero:        '',
  publisher:        Publisher.DCComics,
  alter_ego:        '',
  first_appearance: '',
  characters:       '',
  alt_img:         ''
}
  constructor() { }

  ngOnInit(): void {
  }

}
