const router = require('express').Router();
const ToDo = require("../modeles/ToDo");

router.post('/add/todo', (req, res) => {
   const {todo, board} = req.body;
   console.log(req.body);
   const newTodo = new ToDo({todo, board});
   console.log(newTodo);
    newTodo
        .save()
        .then(() => {
            console.log("Successfully added todo!");
            res.redirect("/");
        })
        .catch((err) => console.log(err));
} )

    .get("/delete/todo/:_id", (req, res) => {
        const { _id } = req.params;
        console.log(_id);
        ToDo.deleteOne({ _id })
            .then(() => {
                console.log("Deleted Todo Successfully!");
                res.redirect("/");
            })
            .catch((err) => console.log(err));
    });


module.exports = router;