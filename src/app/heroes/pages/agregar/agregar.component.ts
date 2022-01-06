import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from "rxjs/operators";
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
  img{
    width: 100%;
    border-radius:5px
  }
  `
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
  constructor(private HeroesService: HeroesService,
              private ActivatedRoute: ActivatedRoute,
              private router: Router,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
   if( !this.router.url.includes('editar') ){
     return;
   }

    this.ActivatedRoute.params
    .pipe(
      switchMap( ({id})=> this.HeroesService.getHeroePorId(id) )
    )
    .subscribe( heroe => this.heroe =heroe)
  }
  guardar(){
    console.log(this.heroe);
    if (this.heroe.superhero.trim().length === 0 ) 
    {
      return;
    }
    if (this.heroe.id) {
      //update
      this.HeroesService.putHeroe(this.heroe)
      .subscribe(heroe=> this.modalSnakbar('Regsitro actualizado'))
      
    }else{
      //create
    this.HeroesService.postHeroe(this.heroe)
    .subscribe(heroe=>{
      this.router.navigate(['/heroes/editar', heroe.id]);
      this.modalSnakbar('Regsitro creado')
    })
    }
  }

  borrarHeroe(){
    this.HeroesService.deleteHeroe(this.heroe.id)
    .subscribe(resp =>{
this.router.navigate(['/heroes'])
    })
  }

  modalSnakbar(mensaje: string){
this._snackBar.open(mensaje, 'ok!',{
  duration: 2500
});
  }
}
