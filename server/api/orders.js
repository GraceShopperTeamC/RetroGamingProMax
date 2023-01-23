const router = require("express").Router();
const {
    models: { Order },
} = require("../db");

router.get("/", async (req, res, next) => {
    try {
        const orders = await Order.findAll({});
        res.json(orders);
    } catch (err) {
        next(err);
    }
});

router.get("/incompleteOrders", async (req, res, next) => {
    try {
        const orders = await Order.findAll({
            where:{
                userId : req.headers.authid || null,
                completed: false
            },
        });
        res.json(orders);
    } catch (err) {
        next(err);
    }
});

router.get("/:orderId", async (req, res, next) => {
    try {
        const order = await Order.findByPk(req.params.orderId);
        //console.log(order)
        res.send(order);
    } catch (err) {
        next(err);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const orders = await Order.create(req.body);
        res.send(orders);
    } catch (err) {
        next(err);
    }
});

router.put("/:id", async (req, res, next) => {
    try {
        const order = await Order.findByPk(req.params.id);
        res.send(await order.update(req.body));
    } catch (err) {
        next(err);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const order = await Order.findByPk(req.params.id);
        order.destroy();
        res.send(order);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
