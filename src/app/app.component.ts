import { Component } from '@angular/core';
// import { HeroesService } from './heroes/services/heroes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'heroesApp';
  // constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    // this.heroesService.getHeroes().subscribe(resp=>  console.log(resp)
    // )
  }
}
