import * as R from "ramda";
import { expect, test, describe } from "vitest";
import { libraryData } from "./data";
import { Catalog } from "../catalog";

describe("Catalog", () => {
  describe("getAuthorName", () => {
    test("returns the author name", () => {
      const authorName = Catalog.getAuthorName(
        "alan-moore",
        libraryData.catalog
      );
      expect(authorName).toBe("Alan Moore");
    });

    test("returns undefined if author does not exist", () => {
      const authorName = Catalog.getAuthorName("john-doe", libraryData.catalog);
      expect(authorName).toBeUndefined();
    });
  });

  describe("authorNames", () => {
    test("returns an array containing author names", () => {
      const book = R.path(
        ["catalog", "booksByIsbn", "978-1779501127"],
        libraryData
      );
      const authorNames = Catalog.authorNames(book, libraryData.catalog);

      expect(authorNames).toHaveLength(2);
    });

    test("returns an empty array if book does not exist", () => {
      const book = R.path(
        ["catalog", "booksByIsbn", "978-1234567890"],
        libraryData
      );
      const authorNames = Catalog.authorNames(book, libraryData.catalog);

      expect(authorNames).toHaveLength(0);
    });
  });

  describe("bookInfo", () => {
    test("returns a book info object", () => {
      const book = R.path(
        ["catalog", "booksByIsbn", "978-1779501127"],
        libraryData
      );

      const bookInfo = Catalog.bookInfo(book, libraryData.catalog);
      expect(bookInfo).toStrictEqual({
        title: "Watchmen",
        isbn: "978-1779501127",
        authorNames: ["Alan Moore", "Dave Gibbons"],
      });
    });
  });

  describe("searchBooksByTitle", () => {
    test("returns an array of books matching the title", () => {
      const results = Catalog.searchBooksByTitle(
        "watchmen",
        libraryData.catalog
      );
      expect(results).toHaveLength(1);
    });

    test("returns an empty array if no books match", () => {
      const results = Catalog.searchBooksByTitle(
        "watchman",
        libraryData.catalog
      );
      expect(results).toHaveLength(0);
    });
  });
});
