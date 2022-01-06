import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styles: [
  ]
})
export class ConfirmarComponent implements OnInit {

  constructor(private MatDialogRef: MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Heroe) { }

  ngOnInit(): void {
    console.log(this.data);
    
  }


cerrar(){
this.MatDialogRef.close();
}
borrar(){
  this.MatDialogRef.close(true);

}

}
