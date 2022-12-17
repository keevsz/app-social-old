const { check } = require("express-validator")
const validateResults = require("../utils/handleValidator")

const validatorRegister = [
  check("name").exists().notEmpty().isLength({ min: 3, max: 99 }),
  check("email").exists().notEmpty().normalizeEmail().isEmail(),
  check("password").exists().notEmpty().isLength({ min: 6, max: 20 }),
  check("pic").exists().notEmpty().isString(),
  (req, res, next) => {
    return validateResults(req, res, next)
  },
]

const validatorLogin = [
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty().isLength({ min: 6, max: 20 }),
  (req, res, next) => {
    return validateResults(req, res, next)
  },
]
module.exports = { validatorLogin, validatorRegister }
