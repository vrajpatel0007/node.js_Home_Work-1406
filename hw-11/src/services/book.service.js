const { Book } = require("../models");

/**
 * Create book
 * @param {object} reqBody
 * @returns {Promise<Book>}
 */
const createBook = async (reqBody) => {
  return Book.create(reqBody)
};

const listBook = async (reqBody) => {
  return Book.find({ $or: [{ is_active: true }] })
};

const deleteBook = async (id) => {
  return Book.findByIdAndDelete(id)
};

const bookByName = async (book_name) => {
  return Book.findOne({ book_name });
}

module.exports = { createBook, listBook, deleteBook, bookByName }