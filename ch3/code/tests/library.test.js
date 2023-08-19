import { expect, test, describe } from "vitest";
import { libraryData } from "./data";
import { Library } from "../library";

describe("Library", () => {
  describe("searchBooksByTitleJSON", () => {
    test("returns a valid JSON string", () => {
      const parse = () => {
        const result = Library.searchBooksByTitleJSON("wat", libraryData);
        return JSON.parse(result);
      };

      expect(parse).not.Throw();
    });
  });
});
