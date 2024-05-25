import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: 'Goku',
    power: 1500
  };

  emitCharacter(): void {

    //debugger; //! Cuando JS llegue a este punto la ejecucion se va a detener alli

    console.log(this.character);

    if (this.character.name.length == 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0};
  }
}
