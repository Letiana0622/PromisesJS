import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  constructor(saving) {
    this.saving = saving;
  }

    static load() {
      const saving = read().then((data) => json(data));
      return saving;
    }  
}

GameSavingLoader.load().then((saving) => {
  const result = new GameSavingLoader(saving);
  console.log(result);
}, (error) => {
  console.log(error);
});