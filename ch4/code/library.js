import * as R from "ramda";
import { Catalog } from "./catalog.js";
import { UserManagement } from "./management.js";

export class Library {
  static searchBooksByTitleJSON(title, data) {
    const results = Catalog.searchBooksByTitle(
      title,
      R.path(["catalog"], data)
    );
    return JSON.stringify(results);
  }

  static addMember(member, data) {
    const management = R.path(["management"], data);
    const updatedManagement = UserManagement.addMember(member, management);

    const updatedData = R.set(
      R.lensPath(["management"]),
      updatedManagement,
      data
    );

    return updatedData;
  }
}
