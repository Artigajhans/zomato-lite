const { getLoaction, updateCustomerInfo } = require("../controllers/customer.controller")

const router = require("express").Router()


router
    .post("/get-location", getLoaction)
    .post("/update-info", updateCustomerInfo)

module.exports = router