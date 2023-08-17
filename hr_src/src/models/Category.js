const monogdb = require("mogoose");

const categorySchema = new mogoose.Schema(
    {
        category_name: {
            type: String,
            trim: true,
        },
        category_desc: {
            type: String,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true,
        }
    },
    {
        timestanmps: true,
        versionkey: false,
    }

)



const category = mogoose.model("category", categorySchema)
module.exports = category