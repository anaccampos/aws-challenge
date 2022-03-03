const { Device, Category } = require('../database/models');

module.exports = {

    async index(req, res) {
        try {
            const device = await Device.findAll()
            return res.status(200).json(device);
        } catch (err) {
            return res.status(500);
        }
    },

    async create(req, res) {
        const { categoryId, color, partNumber } = req.body;

        try {
            const category = await Category.findByPk(categoryId);

            if(!category)
                return res.status(400).json({ message: "Category not found" });

            const device = await Device.create({ categoryId, color, partNumber });
            return res.status(201).json(device);
        } catch(err) {
            return res.status(500);
        }
    },

    async delete(req, res) {
        const { id } = req.params;
        const device = await Device.findByPk(id);

        try {
            await device.destroy();
            return res.sendStatus(200);
        } catch(err) {
            return res.status(404).json({message: "Device not found"});
        }
    }

}
