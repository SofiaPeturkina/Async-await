import json from "./parser";
import read from "./reader";
import GameSaving from "./gamesaving";

class GameSavingLoader {
  static async load() {
    const data = await read();
    const value = await json(data);
    const obj = JSON.parse(value);

    return new GameSaving(obj);
  }
}

export default GameSavingLoader;