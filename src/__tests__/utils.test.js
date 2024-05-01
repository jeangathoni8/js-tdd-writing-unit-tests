import { pointsForWord } from "../utils";
import { describe, it, expect } from "@jest/globals";

describe("pointsForWord", () => {
    it("handles uppercase and lowercase input", () => {
        const word = "tEsT";
      
        const points = pointsForWord(word);
      
        expect(points).toBe(7);
      });
});
