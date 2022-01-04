import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
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
 termino: string = '';
 heroe: Heroe[]=[];
 heroeSeleccionado:Heroe | undefined;
 vermas: number =6;
  FormSearch = this.FormBuilder.group({
    heroe: ['',[Validators.required]]
  })

  ngOnInit(): void {
  }

  aumentarSugerenciasBuscador(){
    // this.vermas += 1;
    // console.log(this.vermas);
    
    // this.HeroesService.getSugerencias(this.termino, this.vermas)
    // .subscribe( heroes => this.heroe = heroes )
  }

  buscando(){
    //console.log(this.vermas);
    
   this.HeroesService.getSugerencias( this.termino.trim() )//this.vermas
   .subscribe(heroes => this.heroe = heroes )
   
  }


  opcionSeleccionada(event: MatAutocompleteSelectedEvent){

    if(!event.option.value){
      this.heroeSeleccionado = undefined;
     return;
    }
    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;
    this.HeroesService.getHeroePorId( heroe.id! )
    .subscribe( heroe => this.heroeSeleccionado = heroe )
   
  }
}
