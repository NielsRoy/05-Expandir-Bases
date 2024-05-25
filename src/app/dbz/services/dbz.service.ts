import { Injectable } from '@angular/core';

//? Como este paquete esta escrito en JS nos recomienda ejecutar: npm i --save-dev @types/uuid
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';



//*Documentacion sobre Servicios: https://v17.angular.io/guide/singleton-services
//*Dependencia par UUID: https://www.npmjs.com/package/uuid

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    }
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(),
      ...character    //toma las propiedades de character y las coloca en newCharacter, esto no toma la referencia de character
    }
    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string): void {
    //this.characters.splice(index, 1);

    this.characters = this.characters.filter(character => character.id !== id);
  }

}
