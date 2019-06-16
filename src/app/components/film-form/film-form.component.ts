import { Component, OnInit } from '@angular/core';
import Film from 'src/app/interfaces/film';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'film-form',
  templateUrl: './film-form.component.html',
  styleUrls: ['./film-form.component.css']
})
export class FilmFormComponent implements OnInit {

  genres: string [] = ['Ação', 'Comédia'];
  films: Film [] = [
    {genre: 'Ação', name: 'Vingadores'},
    {genre: 'Comédia', name: 'Jumanji'}
  ];
  filmSelected: string;
  filmsArray: string [] = this.films.map(filme => filme.name);
  constructor() {
  }

  ngOnInit() {
  }

  selected(event: any) {
    this.filmSelected = event;
    console.log(event);
  }

}
