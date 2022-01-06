import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'my-actor-display',
  templateUrl: './actor-display.component.html',
  styleUrls: [ ]
})
export class ActorDisplayComponent  {
  @Input() actor;
  @Input() last;
  @Input() odd;
  @Input() even;
  

  @Output() ActorClickEvent = new EventEmitter();

  ngOnInit() {
  }


  handleActorClick() {
    this.ActorClickEvent.emit(this.actor);
  }

}