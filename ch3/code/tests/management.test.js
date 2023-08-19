import { expect, describe, test } from "vitest";
import { Management } from "../management";
import { libraryData } from "./data";

describe("Management", () => {
  describe("isLibrarian", () => {
    test("should return true - record exists", () => {
      expect(Management.isLibrarian("franck@gmail.com", libraryData)).toBe(
        true
      );
    });

    test("should return false - record does not exist", () => {
      expect(Management.isLibrarian("johndoe@gmail.com", libraryData)).toBe(
        false
      );
    });
  });

  describe("isVIPMember", () => {
    test("should return true - record exists", () => {
      expect(Management.isVIPMember("samantha@gmail.com", libraryData)).toBe(
        true
      );
    });

    test("should return false - record exists", () => {
      expect(Management.isVIPMember("erick@gmail.com", libraryData)).toBe(
        false
      );
    });

    test("should return false - record does not exist", () => {
      expect(Management.isVIPMember("johndoe@gmail.com", libraryData)).toBe(
        false
      );
    });
  });
});
