import { Component, Input } from '@angular/core';
import { Heroe } from 'src/app/heroes/interfaces/heroes.interfaces';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent {


  @Input() heroe! : Heroe;

}
