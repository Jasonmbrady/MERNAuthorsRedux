const mongoose = require("mongoose");
const Author = mongoose.model("Author");

module.exports = {
    index: (req, res) => {
        Author.find()
            .then(authors => res.json(authors))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    getOne: (req, res) => {
        Author.findOne({ _id: req.params.id })
            .then(author => res.json(author))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    create: (req, res) => {
        Author.create(req.body)
            .then(newAuthor => res.json(newAuthor))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    update: (req, res) => {
        Author.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true, new: true })
            .then(updatedAuthor => res.json(updatedAuthor))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    delete: (req, res) => {
        Author.deleteOne({ _id: req.params.id })
            .then(response => res.json(response))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
}