const joi = require('joi')

const CategorySchema = joi.object().keys({
    name: joi.string().required()
})

const DeviceSchema = joi.object().keys({
    categoryId: joi.number().required(),
    color: joi.string().max(16),
    partNumber: joi.number().positive().required()
})

module.exports = {
    CategorySchema,
    DeviceSchema
}
