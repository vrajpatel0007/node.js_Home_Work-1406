const category = require("../models/Category.modale");

/**
 * Create category
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const create_category = async (reqBody) => {
    return category.create(reqBody);
};
const getCategoryList = async (filter, options) => {
    return category.find()
};

const deleteCategory = async (categoryId) => {
    return category.findByIdAndDelete(categoryId);
};
const getCategoryById = async (categoryId) => {
    return category.findById(categoryId);
};

module.exports = {
    create_category,
    getCategoryList,
    deleteCategory,
    getCategoryById
};