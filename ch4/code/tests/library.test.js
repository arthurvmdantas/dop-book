import { expect, test, describe } from "vitest";
import { libraryData } from "./data";
import { Library } from "../library";
import * as R from "ramda";

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

  describe("addMember", () => {
    test("adding an existing member should thrown an error", () => {
      expect(() => {
        Library.addMember(
          {
            email: "samantha@gmail.com",
            encryptedPassword: "c2VjcmV0",
            isBlocked: false,
            isVIP: true,
            bookLendings: [],
          },
          libraryData
        );
      }).toThrowError("Member already exists");
    });

    test("adding a member should return the updated data structure", () => {
      const newMember = {
        email: "johndoe@gmail.com",
        encryptedPassword: "pn7l01LP",
        isBlocked: false,
        isVIP: false,
        isSuper: true,
        bookLendings: [],
      };

      const newLibraryData = Library.addMember(newMember, libraryData);

      expect(
        R.path(
          ["management", "membersByEmail", "johndoe@gmail.com"],
          newLibraryData
        )
      ).toEqual(newMember);
    });
  });
});
