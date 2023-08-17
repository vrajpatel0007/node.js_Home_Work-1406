const mongoose = require("mongoose");

const productSchema = new monogdb.Schema(
    {
        product_name: {
            type: String,
            trim: true,
        },
        product_price: {
            type: String,
            trim: true,
        },
        product_desc: {
            type: String,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps:true,
        versionkey: false
    }
)


const product = mongoose.model("prodct",productSchema);
module.exports = product;