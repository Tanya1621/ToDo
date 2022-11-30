const router = require('express').Router();
const Todo = require("./modeles/ToDo");

router.get("/", async(req, res) => {
    const allTodo = await Todo.find();
    res.json(allTodo);
    //res.end('ok');
})



    module.exports = router;