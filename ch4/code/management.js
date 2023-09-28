import * as R from "ramda";

export class UserManagement {
  /**
   * Check if the given email belongs to a librarian.
   *
   * @param {string} email - The email to check.
   * @param {object} data - The data object containing user information.
   * @return {boolean} - True if the email belongs to a librarian, false otherwise.
   */
  static isLibrarian(email, data) {
    return email in R.path(["librariansByEmail"], data);
  }

  /**
   * Determines if the given email belongs to a VIP member.
   *
   * @param {string} email - The email to check.
   * @param {object} data - The data object containing user information.
   * @return {boolean} Returns true if the email belongs to a VIP member, otherwise returns false.
   */
  static isVIPMember(email, data) {
    return R.path(["membersByEmail", email, "isVIP"], data) === true;
  }

  /**
   * Determines if the given email belongs to a super member.
   *
   * @param {string} email - The email to check.
   * @param {object} data - The data object containing user information.
   * @return {boolean} Returns true if the email belongs to a super member, otherwise returns false.
   */
  static isSuper(email, data) {
    return R.path(["membersByEmail", email, "isSuper"], data) === true;
  }

  static addMember(member, data) {
    const memberEmail = R.path(["email"], member);
    const memberExists = memberEmail in R.path(["membersByEmail"], data);

    // if email already exists, throw an error
    if (memberExists) {
      throw new Error("Member already exists");
    }

    // add member
    const updatedData = R.set(
      R.lensPath(["membersByEmail", memberEmail]),
      member,
      data
    );

    // return the updated data structure
    return updatedData;
  }
}
