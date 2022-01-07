import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private router: Router,
              private AuthService: AuthService) { }

  login(){

 this.AuthService.login()
 .subscribe(resp=>{
   console.log(resp);
   
   if(resp.id){
  
     this.router.navigate(['./heroes']);
   }
 })
  }
}
