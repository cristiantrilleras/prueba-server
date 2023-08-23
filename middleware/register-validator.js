const { check, validationResult } = require('express-validator');


let validatorParams = [
  check('id').isLength({min:0}),
  check('nombre').isLength({ min: 4, max: 15}),
  check('edad').isInt,
  check('telefono').isInt({ min: 1, max: 50}),
  check('profesion').isString
 ];
   

function validator(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}


module.exports = {
    validatorParams,
    validator
}


