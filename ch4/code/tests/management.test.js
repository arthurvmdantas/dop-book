import { expect, describe, test } from "vitest";
import { UserManagement } from "../management";
import { libraryData } from "./data";
import * as R from "ramda";

describe("Management", () => {
  describe("isLibrarian", () => {
    test("should return true - record exists", () => {
      expect(
        UserManagement.isLibrarian(
          "franck@gmail.com",
          R.path(["management"], libraryData)
        )
      ).toBe(true);
    });

    test("should return false - record does not exist", () => {
      expect(
        UserManagement.isLibrarian(
          "johndoe@gmail.com",
          R.path(["management"], libraryData)
        )
      ).toBe(false);
    });
  });

  describe("isVIPMember", () => {
    test("should return true - record exists", () => {
      expect(
        UserManagement.isVIPMember(
          "samantha@gmail.com",
          R.path(["management"], libraryData)
        )
      ).toBe(true);
    });

    test("should return false - record exists", () => {
      expect(
        UserManagement.isVIPMember(
          "erick@gmail.com",
          R.path(["management"], libraryData)
        )
      ).toBe(false);
    });

    test("should return false - record does not exist", () => {
      expect(
        UserManagement.isVIPMember(
          "johndoe@gmail.com",
          R.path(["management"], libraryData)
        )
      ).toBe(false);
    });
  });

  describe("isSuper", () => {
    test("should return true - record exists", () => {
      expect(
        UserManagement.isSuper(
          "erick@gmail.com",
          R.path(["management"], libraryData)
        )
      ).toBe(true);
    });

    test("should return false - record exists (but property is missing)", () => {
      expect(
        UserManagement.isSuper(
          "samantha@gmail.com",
          R.path(["management"], libraryData)
        )
      ).toBe(false);
    });

    test("should return false - record does not exist", () => {
      expect(
        UserManagement.isSuper(
          "johndoe@gmail.com",
          R.path(["management"], libraryData)
        )
      ).toBe(false);
    });
  });

  describe("addMember", () => {
    test("adding an existing member should thrown an error", () => {
      expect(() => {
        UserManagement.addMember(
          {
            email: "samantha@gmail.com",
            encryptedPassword: "c2VjcmV0",
            isBlocked: false,
            isVIP: true,
            bookLendings: [],
          },
          R.path(["management"], libraryData)
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

      const newManagementData = UserManagement.addMember(
        newMember,
        R.path(["management"], libraryData)
      );

      expect(
        R.path(["membersByEmail", "johndoe@gmail.com"], newManagementData)
      ).toEqual(newMember);
    });
  });
});
