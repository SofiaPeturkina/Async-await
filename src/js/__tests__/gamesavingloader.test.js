import GameSaving from "../gamesaving";
import GameSavingLoader from "../gamesavingloader";

describe("Class GameSavingLoader:", () => {
    test("should return object", async () => {
        const result = new GameSaving({
          id: 9,
          created: 1546300800,
          userInfo: {
            id: 1,
            name: "Hitman",
            level: 10,
            points: 2000,
          },
        });
        
        await expect(GameSavingLoader.load()).resolves.toEqual(result);
    });
});