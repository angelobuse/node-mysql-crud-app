const Grocery = require('../models/grocery')

exports.getAllGroceries = async (req, res, next) => {
    try {
        const [allGroceries] = await Grocery.fetchAll();
        res.status(200).json(allGroceries);
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
};

exports.postGrocery = async (req, res, next) => {
    try {
        const postResponse = await Grocery.post(req.body.item);
        res.status(201).json(postResponse)
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
};

exports.updateGrocery = async (req, res, next) => {
    try {
        const updateResponse = await Grocery.update(req.body.id, req.body.item);
        res.status(200).json(updateResponse);
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
}

exports.deleteGrocery = async (req, res, next) => {
    try {
        const deleteResponse = await Grocery.delete(req.params.id);
        res.status(200).json(deleteResponse);
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error)
    }
}

