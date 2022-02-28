function schemaValidation (schema) {
    return (req, res, next) => {
        const objectToValidate = req.body
        const { error, value } = schema.validate(objectToValidate, {
            stripUnknown: true
        });
        if (error) {
            res.status(400).send(error.message)
            return
        }
        req.body = value
        next()
    }
}

module.exports = schemaValidation;
