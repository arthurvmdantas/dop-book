import * as R from "ramda";

export class Catalog {
  /**
   * Retrieves the author name based on the provided author ID and data.
   *
   * @param {string} authorId - The ID of the author.
   * @param {object} data - The data containing the authors.
   * @return {string} The name of the author.
   */
  static getAuthorName(authorId, data) {
    const authorName = R.path(["authorsById", authorId, "name"], data);
    return authorName;
  }

  /**
   * Retrieves the names of the authors associated with a given book.
   *
   * @param {object} book - The book object containing authorIds.
   * @param {object} data - The data object containing author information.
   * @return {array} An array of author names.
   */
  static authorNames(book, data) {
    const authors = R.path(["authorIds"], book);
    const names = authors.map((id) => Catalog.getAuthorName(id, data));
    return names;
  }

  /**
   * Generates the book information based on the provided book and data.
   *
   * @param {object} book - The book object containing title, isbn, and other details.
   * @param {object} data - The data object containing additional book information.
   * @return {object} The book information object with title, isbn, and author names.
   */
  static bookInfo(book, data) {
    const authors = Catalog.authorNames(book, data);
    return {
      title: R.path(["title"], book),
      isbn: R.path(["isbn"], book),
      authorNames: authors,
    };
  }

  /**
   * This function searches for books by title in the given data.
   *
   * @param {string} title - The title to search for.
   * @param {object} data - The data containing the books.
   * @return {array} An array of books matching the title.
   */
  static searchBooksByTitle(title, data) {
    const books = R.path(["booksByIsbn"], data);

    // R.filter can traverse an object filtering its properties (like vanilla Array.filter does).
    const filtered = R.filter(
      (book) =>
        R.path(["title"], book).toLowerCase().includes(title.toLowerCase()),
      books
    );

    // R.map can traverse an object transforming its properties (like vanilla Array.map does).
    const transform = R.pipe(
      R.map((book) => Catalog.bookInfo(book, data)),
      R.values
    );
    return transform(filtered);
  }
}
