const Category = require('./controllers/Category');
const Device = require('./controllers/Device');
const { CategorySchema, DeviceSchema } = require('./schemas');
const schemaValidation = require('./helpers')

module.exports = (app) => {

    app
        .route('/device')
        .get(Device.index)
        .post(schemaValidation(DeviceSchema), Device.create)

    app
        .route('/device/:id')
        .delete(Device.delete)

    app
        .route('/category')
        .get(Category.index)
        .post(schemaValidation(CategorySchema), Category.create)
    
    app
        .route('/category/:id')
        .delete(Category.delete)
}
