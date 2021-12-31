import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { Heroe } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  constructor(private FormBuilder: FormBuilder,
              private HeroesService: HeroesService) { }
 heroe: Heroe[]=[];
 termino: string = '';
 vermas: number =6;
  FormSearch = this.FormBuilder.group({
    heroe: ['',[Validators.required]]
  })

  ngOnInit(): void {
  }

  aumentarSugerenciasBuscador(){
    this.vermas += 1;
    console.log(this.vermas);
    
    this.HeroesService.getSugerencias(this.termino, this.vermas)
    .subscribe( heroes => this.heroe = heroes )
  }

  buscando(){
    console.log(this.vermas);
    
   this.HeroesService.getSugerencias(this.termino,this.vermas)
   .subscribe(heroes => {
     this.heroe = heroes;
     console.log(this.heroe);
     
    })
   console.log(this.heroe);
   
  }
}
