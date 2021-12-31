import { Component, OnInit, Output } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  constructor(private heroesService: HeroesService) { }

  heroes : Heroe[]=[];
  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe(heroes=>  {
      this.heroes = heroes;
    });
  }

}
