import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  //* Propiedad a la que le puedo agregar un valor desde el componente padre y podemos cambiar su nombre
  @Input()
  public CharacterList: Character[] = [ //Este valor por defecto sera reemplazado por lo que le envie el componente padre
    {
      name: 'Trunks',
      power: 1000
    }
  ];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    if (!id) return;

    this.onDelete.emit(id);
  }
}
