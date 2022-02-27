const Category = require('./controllers/Category');
const Device = require('./controllers/Device');

module.exports = (app) => {

    app
        .route('/device')
        .get(Device.index)
        .post(Device.create)

    app
        .route('/device/:id')
        .delete(Device.delete)

    app
        .route('/category')
        .get(Category.index)
        .post(Category.create)
    
    app
        .route('/category/:id')
        .delete(Category.delete)
}
