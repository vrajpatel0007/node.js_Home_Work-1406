const { userService } = require("../services")

const createcategory = async (req, res) => {
    try {
        const reqBody = res.body;

        const category = await userService.createcategory(reqBody);
        if (!category) {
          throw new Error("Something went wrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "User create successfully!",
            data: { category },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}
module.exports = {
    createcategory
  };