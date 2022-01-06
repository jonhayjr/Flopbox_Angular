import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ActorDisplayComponent } from './actor-display/actor-display.component';
import {FavoriteActorsComponent} from './favorite-actors/favorite-actors.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ActorDisplayComponent, FavoriteActorsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
