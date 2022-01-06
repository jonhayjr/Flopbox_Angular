import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-favorite-actors',
  templateUrl: './favorite-actors.component.html',
  styleUrls: ['./favorite-actors.component.css']
})

export class FavoriteActorsComponent implements OnInit {

  @Input() favoriteActor;
  @Input() last;
  @Input() odd;
  @Input() even;
  @Input() index;
  
  constructor() { }

  ngOnInit() {

  }

  getActorClasses() {
    if (this.last) {
      return 'text-danger';
    } else if (this.even) {
      return 'text-success';
    } else if (this.odd) {
      return 'text-info';
    } else {
      return ''
    }
  }


}