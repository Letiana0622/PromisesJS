import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    const saving = read().then((data) => json(data));
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(saving);
      }, 0);
    });
  }
}

GameSavingLoader.load().then((saving) => {
  console.log(saving);
}, (error) => {
  console.log(error);
});