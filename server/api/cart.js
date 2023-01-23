const router = require("express").Router();
const {
    models: { Cart, Product, Order },
} = require("../db");

router.get("/", async (req, res, next) => {
    try {
        const cart = await Cart.findAll({});
        res.json(cart);
    } catch (err) {
        next(err);
    }
});
router.get("/myCart", async (req, res, next) => {
    try {
        console.log(req.headers);
        const cart = await Cart.findAll({
            where: {
                userId: req.headers.authid || null,
            },
            include: [
                {
                    model: Product,
                },
                {
                    model: Order,
                    where: {
                        completed: false,
                    },
                },
            ],
        });
        res.json(cart);
    } catch (err) {
        next(err);
    }
});
router.get("/myHomeCart", async (req, res, next) => {
    try {
        console.log(req.headers);
        const cart = await Cart.findAll({
            where: {
                userId: req.headers.authid || null,
            },
            include: [
                {
                    model: Product,
                },
                {
                    model: Order,
                    where: {
                        completed: false,
                    },
                },
            ],
        });
        res.json(cart);
    } catch (err) {
        next(err);
    }
});
router.get("/myOrders", async (req, res, next) => {
    try {
        console.log(req.headers);
        const cart = await Cart.findAll({
            where: {
                userId: req.headers.authid || null,
            },
            include: [
                {
                    model: Product,
                },
                {
                    model: Order,
                    where: {
                        completed: true,
                    },
                },
            ],
        });
        res.json(cart);
    } catch (err) {
        next(err);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const cart = await Cart.findByPk(req.params.id);
        res.send(cart);
    } catch (err) {
        next(err);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const cart = await Cart.create(req.body);
        res.send(cart);
    } catch (err) {
        next(err);
    }
});

router.put("/:id", async (req, res, next) => {
    try {
        const cart = await Cart.findByPk(req.params.id);
        res.send(await cart.update(req.body));
    } catch (err) {
        next(err);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        console.log(req.params.id);
        const cart = await Cart.findByPk(req.params.id);
        cart.destroy();
        res.send(cart);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
