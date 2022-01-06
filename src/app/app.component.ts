import { Component } from '@angular/core';
import { FLOP_DATA, ACTORS } from './FLOP_DATA';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  flopData;
  actors;
  favoriteActors = [];

  constructor(private titleService: Title) {
    this.flopData = FLOP_DATA;
    this.actors = ACTORS;
    titleService.setTitle('Flopbox')
  }

  actorSelected(actor) {
    this.favoriteActors.push(actor);
  }

}
