import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

 
  constructor(private AuthService: AuthService,
              private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this.AuthService.verificacionAutenticacion()
      .pipe(
        tap( estaAutenticado =>{
          if ( !estaAutenticado) {
            this.router.navigate(['./auth/login'])
          }
        })
      );
      

    //   if (this.AuthService.auth.id) {
    //     return true
    //   }
    //   console.log('Bloqueado por el AuthGuard - CanActive');
    // return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean>  | boolean  {

      return this.AuthService.verificacionAutenticacion()
      .pipe(
        tap( estaAutenticado =>{
          if ( !estaAutenticado) {
            this.router.navigate(['./auth/login'])
          }
        })
      );;
  
    //   if (this.AuthService.auth.id) {
    //     return true
    //   }
    //   console.log('Bloqueado por el AuthGuard - CanLoad');
      
      
    // return false;
  }
}
