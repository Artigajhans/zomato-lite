const asyncHandler = require("express-async-handler")
const { checkEmpty } = require("../utils/checkEmpty")
const Order = require("../models/Order")
const { io } = require("../socket/socket")

exports.getRiderOrders = asyncHandler(async (req, res) => {
    const result = await Order
        .find({ rider: req.user })
        .select("-rider -createdAt -updatedAt -__v")
        .populate("customer", "name mobile address")
        .populate("resturant", "name hero mobile address")
        .populate("items.dish", "name type image price")
        .sort({ createdAt: -1 })
    res.json({ message: "order fetch success", result })
})
exports.updateOrderStatus = asyncHandler(async (req, res) => {
    const { oid } = req.params
    await Order.findByIdAndUpdate(oid, { status: req.body.status })
    const result = find({ customer: req.user, status: "delivered" })
        .select("-customer -createdAt -updatedAt -__v")
        .populate("rider", "name mobile")
        .populate("resturant", "name hero")
        .populate("items.dish", "name type image price")
        .sort({ createdAt: -1 })
    io.emit("status-update", result)
    // io.emit("hide-deliveredOrder", result)
    res.json({ message: "order fetch success" })
})