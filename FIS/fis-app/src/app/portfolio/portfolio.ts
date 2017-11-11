import { Position } from './position';

export class Portfolio {

  positions: Position[] = [];

  name = 'My portfolio';

  constructor(name) {
    this.name = name;
  }

  add(position: Position) {
    this.positions.push(position);
  }

}
