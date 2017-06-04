var express = require('express');

var bookRouter = express.Router();

var router = function(nav){
    var books = [
    {
        title: 'A',
        author: 'X'
    },
    {
        title: 'B',
        author: 'Y'
    },
    {
        title: 'C',
        author: 'Z'
    }];
bookRouter.route('/')
    .get(function(req, res) {
        res.render('bookListView',{
        title:'Hello From Books',
        nav: nav, 
        books: books
    });
});

bookRouter.route('/:id')
    .get(function(req, res) {
        var id = req.params.id;
        res.render('bookView',{
        title:'Hello From Books',
        nav: nav, 
        book: books[id]
        });
    });

    return bookRouter;
}


module.exports=router;