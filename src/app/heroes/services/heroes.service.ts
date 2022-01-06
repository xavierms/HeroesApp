import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroes.interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
private apiHeroes: string = environment.apiHeroes;

  constructor(private http: HttpClient) { }

getHeroes(): Observable<Heroe[]>{
 return this.http.get<Heroe[]>(`${ this.apiHeroes}/heroes`);
}

getHeroePorId(id: string): Observable<Heroe>{
  return this.http.get<Heroe>(`${this.apiHeroes}/heroes/${id}`);

}
getSugerencias(termino: string): Observable<Heroe[]>{//  count: number
  return this.http.get<Heroe[]>(`${this.apiHeroes}/heroes/?q=${ termino }&_limit=6`);//${ count }
}


postHeroe( heroe: Heroe ):Observable<Heroe>{
return this.http.post<Heroe>(`${ this.apiHeroes }/heroes`, heroe);
}

putHeroe( heroe: Heroe ):Observable<Heroe>{
  return this.http.put<Heroe>(`${ this.apiHeroes }/heroes/${ heroe.id }`, heroe);
  }
deleteHeroe( id: any ):Observable<any>{
    return this.http.delete<any>(`${ this.apiHeroes }/heroes/${ id }`);
    }
  
}
