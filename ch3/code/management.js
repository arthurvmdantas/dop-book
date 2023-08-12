import * as R from "ramda";

export class Management {
  static isLibrarian(email, data) {
    return email in R.path(["management", "librariansByEmail"], data);
  }

  static isVIPMember(email, data) {
    return (
      R.path(["management", "membersByEmail", email, "isVIP"], data) === true
    );
  }
}
