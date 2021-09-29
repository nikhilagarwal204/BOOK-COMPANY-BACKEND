// MAIN BACKEND FILE

const db = require("./database");
// console.log(db.books);
// console.log(db.authors);
// console.log(db.publications);

const express = require("express");

const app = express();
app.use(express.json());

// http://localhost:3000/
app.get("/", (req, res) => {
    return res.json({"WELCOME": `to my Backend Software for the Book Company`});
});

// http://localhost:3000/books
app.get("/books", (req, res) => {
    const getAllBooks = db.books;
    return res.json(getAllBooks);
});

// http://localhost:3000/book-isbn/12345Two
app.get("/book-isbn/:isbn", (req, res) => {
    // console.log(req.params);
    const {isbn} = req.params;
    // console.log(isbn);
    const getSpecificBook = db.books.filter((book) => book.ISBN === isbn);
    // console.log(getSpecificBook);
    // console.log(getSpecificBook.length);
    if(getSpecificBook.length===0) {
        return res.json({"error": `No Book found for the ISBN of ${isbn}`});
    }
    return res.json(getSpecificBook[0]);
});

// http://localhost:3000/book-category/programming
app.get("/book-category/:category", (req, res) => {
    // // console.log(req.params);
    const {category} = req.params;
    // // console.log(isbn);
    const getSpecificBooks = db.books.filter((book) => book.category.includes(category));
    // // console.log(getSpecificBook);
    // // console.log(getSpecificBook.length);
    if(getSpecificBooks.length===0) {
        return res.json({"error": `No Books found for the category of ${category}`});
    }
    return res.json(getSpecificBooks);
});

// http://localhost:3000/authors
app.get("/authors", (req, res) => {
    const getAllAuthors = db.authors;
    return res.json(getAllAuthors);
});

// http://localhost:3000/author-id/1
app.get("/author-id/:id", (req, res) => {
    // console.log(req.params);
    let {id} = req.params;
    id = Number(id);
    // console.log(id);
    const getSpecificAuthor = db.authors.filter((author) => author.id === id);
    // console.log(getSpecificAuthor);
    // console.log(getSpecificAuthor.length);
    if(getSpecificAuthor.length===0) {
        return res.json({"error": `No Author found for the id of ${id}`});
    }
    return res.json(getSpecificAuthor[0]);
});

// http://localhost:3000/author-isbn/12345Two
app.get("/author-isbn/:isbn", (req, res) => {
   const {isbn} = req.params;
   const getSpecificAuthors = db.authors.filter((author) => author.books.includes(isbn));
   if(getSpecificAuthors.length===0) {
       return res.json({"error": `No Authors found for the isbn of ${isbn}`});
   }
   return res.json(getSpecificAuthors);
});

// http://localhost:3000/publications
app.get("/publications", (req, res) => {
    const getAllPublications = db.publications;
    return res.json(getAllPublications);
});

// http://localhost:3000/publication-isbn/12345Two
app.get("/publication-isbn/:isbn", (req, res) => {
   
});



// http://localhost:3000/book
app.post("/book", (req, res) => {
    // console.log(req.body);
    db.books.push(req.body);
    return res.json(db.books);
});

// http://localhost:3000/author
app.post("/author", (req, res) => {
    // console.log(req.body);
    db.authors.push(req.body);
    return res.json(db.authors);
});

// http://localhost:3000/publication
app.post("/publication", (req, res) => {
});


// http://localhost:3000/book-update/12345ONE
app.put("/book-update/:isbn", (req, res) => {
    // console.log(req.body);
    // console.log(req.params);
    const {isbn} = req.params;
    db.books.forEach((book) => {
        if(book.ISBN === isbn) {
            // console.log({...book, ...req.body});
            return {...book, ...req.body};
        }
        return book;
    })
    return res.json(db.books);
});

// http://localhost:3000/author-update/1
app.put("/author-update/:id", (req, res) => {
});

// http://localhost:3000/publication-update/1
app.put("/publication-update/:id", (req, res) => {
});


// http://localhost:3000/book-delete/12345ONE
app.delete("/book-delete/:isbn", (req, res) => {
    // console.log(req.params);
    const {isbn} = req.params;
    const filteredBooks = db.books.filter((book) => book.ISBN!==isbn);
    // console.log(filteredBooks);
    db.books = filteredBooks;
    return res.json(db.books);
});

// http://localhost:3000/book-author-delete/12345ONE/1
app.delete("/book-author-delete/:isbn/:id", (req, res) => {
    // console.log(req.params);
    let {isbn, id} = req.params;
    id = Number(id);
    db.books.forEach((book) => {
        if(book.ISBN === isbn) {
            if(!book.authors.includes(id)) {
                return;
            }
            book.authors = book.authors.filter((author) => author!==id);
            return book;
        }
        return book;
    })
    return res.json(db.books);
});

// http://localhost:3000/author-book-delete/1/12345ONE
app.delete("/author-book-delete/:id/:isbn", (req, res) => {
});

// http://localhost:3000/author-delete/12345ONE
app.delete("/author-delete/:id", (req, res) => {
});

// http://localhost:3000/publication-delete/12345ONE
app.delete("/publication-delete/:id", (req, res) => {
});

app.listen(3000, () => {
    console.log("MY EXPRESS APP IS RUNNING.....")
});