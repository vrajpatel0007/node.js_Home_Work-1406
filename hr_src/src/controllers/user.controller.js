const { userService } = require("../services")

const createUser = async (req, res) => {
    try {
        const reqBody = res.body;

        const user = await userService.createUser(reqBody);
        if (!user) {
          throw new Error("Something went wrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "User create successfully!",
            data: { user },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}
module.exports = {
    createUser
  };