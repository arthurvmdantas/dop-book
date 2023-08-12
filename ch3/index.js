import { libraryData } from "./data.js";
import { Library } from "./code/library.js";
import { Management } from "./code/management.js";

console.log(Management.isVIPMember("franck@gmail.com", libraryData));
console.log(Library.searchBooksByTitleJSON("wat", libraryData));
