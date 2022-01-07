import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { Auth } from '../../../auth/pages/interfaces/auth.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
.container{
  margin:  10px;
}
.miLogo{
  width: 10%;
  /* margin-left: 83%; */
}
`

    
  ]
})
export class HomeComponent implements OnInit {

get auth(){
  return this.AuthService.auth;
}

  constructor(private router: Router,
              private AuthService:AuthService) { }

  ngOnInit(): void {
  }

  logout(){

 
    this.router.navigate(['./auth']);
     }

}
