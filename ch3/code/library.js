import * as R from "ramda";
import { Catalog } from "./catalog.js";

export class Library {
  static searchBooksByTitleJSON(title, data) {
    const results = Catalog.searchBooksByTitle(
      title,
      R.path(["catalog"], data)
    );
    return JSON.stringify(results);
  }
}
