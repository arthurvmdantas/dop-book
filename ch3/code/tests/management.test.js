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
});
