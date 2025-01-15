const { getLoaction, updateCustomerInfo, getAllResturant } = require("../controllers/customer.controller")

const router = require("express").Router()


router
    .post("/get-location", getLoaction)
    .post("/update-info", updateCustomerInfo)
    .post("/get-resturant", getAllResturant)

module.exports = router
