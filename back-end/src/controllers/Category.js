const { Category } = require('../database/models')

module.exports = {

    async index(req, res) {
        try {
            const category = await Category.findAll()
            return res.json(category);
        } catch (err) {
            return res.status(500);
        }
    },

    async create(req, res) {
        const { name } = req.body;

        try {
            const category = await Category.create({ name });
            return res.status(201).json(category);
        } catch(err) {
            return res.status(500);
        }
    },

    async delete(req, res) {
        const { id } = req.params;
        const category = await Category.findByPk(id);

        try {
            await category.destroy();
            return res.status(200);
        } catch(err) {
            return res.status(404).json({message: "Category not found."});
        }
    }
}
