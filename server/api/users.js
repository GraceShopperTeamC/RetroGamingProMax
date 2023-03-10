const router = require("express").Router();
const {
    models: { User, Cart, Product },
} = require("../db");

router.get("/", async (req, res, next) => {
    try {
        const loggedInUser = await User.findByToken(req.headers.authorization);
        if (loggedInUser.isAdmin === true) {
            const users = await User.findAll({});
            res.send(users);
        } else {
            res.json({ email: "Access Denied" });
        }
    } catch (err) {
        next(err);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const loggedInUser = await User.findByToken(req.headers.authorization);
        const user = await User.findOne({
            where: {
                id: req.params.id,
            },
        });
        if (user.id == loggedInUser.id) {
            res.send(user);
        } else{
            res.json({email: "Access Denied"})
        }
    } catch (err) {
        next(err);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const users = await User.create(req.body);
        res.send(users);
    } catch (err) {
        next(err);
    }
});

router.put("/:id", async (req, res, next) => {
    try {
        const user = await User.findByPk(req.params.id);
        res.send(await user.update(req.body));
    } catch (err) {
        next(err);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const user = await User.findByPk(req.params.id);
        user.destroy();
        res.send(user);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
