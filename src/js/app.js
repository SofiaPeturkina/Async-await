import GameSavingLoader from "./basic";

(async () => {
  try {
    await GameSavingLoader.load();
  } catch (err) {
    throw new Error(err);
  }
})();
