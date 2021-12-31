import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interfaces';
import { switchMap } from "rxjs/operators";
import { HeroesService } from '../../services/heroes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroes.component.html',
  styles: [`
  img{
    width: 100%;
    border-radius: 5px;

  }
  div.mover{
    margin-left: 8%;
  }
  `
  ]
})
export class HeroesComponent implements OnInit {

  constructor( private ActivatedRoute: ActivatedRoute,
               private HeroesService: HeroesService,
               private router: Router ) { }
  heroe!: Heroe;
  ngOnInit(): void {
  this.ActivatedRoute.params
  .pipe(
   switchMap( ({ id })=> this.HeroesService.getHeroePorId(id)) 
  )
  .subscribe(  heroe  => this.heroe = heroe);
}


  regresar(){
    this.router.navigate(['/heroes/listado'])
  }

}
