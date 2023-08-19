import * as R from "ramda";

export class Management {
  /**
   * Check if the given email belongs to a librarian.
   *
   * @param {string} email - The email to check.
   * @param {object} data - The data object containing librarian information.
   * @return {boolean} - True if the email belongs to a librarian, false otherwise.
   */
  static isLibrarian(email, data) {
    return email in R.path(["management", "librariansByEmail"], data);
  }

  /**
   * Determines if the given email belongs to a VIP member.
   *
   * @param {string} email - The email to check.
   * @param {object} data - The data object containing member information.
   * @return {boolean} Returns true if the email belongs to a VIP member, otherwise returns false.
   */
  static isVIPMember(email, data) {
    return (
      R.path(["management", "membersByEmail", email, "isVIP"], data) === true
    );
  }
}
