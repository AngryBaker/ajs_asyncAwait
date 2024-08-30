import json from './parser';
import read from './reader';
import GameSave from './GameSave';

export default class GameSavingLoader {
  static async load() {
    const data = await read();
    const string = await json(data);
    const value = new GameSave(JSON.parse(string))
    return value;
  }
}
