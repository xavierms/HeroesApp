import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroes.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
BackendDB: string = 'http://localhost:3000/heroes';

  constructor(private http: HttpClient) { }

getHeroes(): Observable<Heroe[]>{
 return this.http.get<Heroe[]>(this.BackendDB);
}

getHeroePorId(id: string): Observable<Heroe>{
  return this.http.get<Heroe>(`${this.BackendDB}/${id}`);

}

}
