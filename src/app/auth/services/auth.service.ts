import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Auth } from '../pages/interfaces/auth.interfaces';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private apiHeroes: string = environment.apiHeroes;
private _auth?: Auth;


get auth(){
  return {...this._auth }
}
  constructor( private http: HttpClient) { }

  verificacionAutenticacion(): Observable<boolean>{
    if (!localStorage.getItem('token')) {
      return of(false);
    }

    return this.http.get<Auth>(`${ this.apiHeroes }/usuarios/1`)
                    .pipe(
                      map( auth=>{
                        this._auth= auth;
                        return true;
                      })
                    );

  // return of(false);
  // return of(true);
  }

  login(){
    return this.http.get<Auth>(`${ this.apiHeroes }/usuarios/1`)
    .pipe(
      tap( auth=> this._auth = auth ),
      tap( auth=> localStorage.setItem('id', auth.id))
    )
  }

  logout(){
    this._auth= undefined;
  }
}
