import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
.container{
  margin:  10px;
}
.miLogo{
  width: 10%;
  margin-left: 83%;
}
`

    
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



}
