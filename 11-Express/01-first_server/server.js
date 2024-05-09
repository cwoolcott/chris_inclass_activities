const express = require("express");
const path = require("path");

const app = express();

const PORT = 3001;

app.use(express.static("public"));

const bookData = require("./data/books.json");

app.get("/", function(req, res){
    res.send("GOTO /api/books for the API!");
});

app.get("/api/books", (req, res) => {
    res.json(bookData)
});

app.get("/api/book/:id", (req, res) => {
    const id = req.params.id;
    const authoronly = req.query.authoronly;
    const sort = req.query.sort;
    let found = false;
    bookData.forEach((book)=>{
        book.sort = sort;
        if (book.bookId == id){
            found = true;
            if (authoronly == "yes"){
                res.json({author:book.author});
            }
            else{
                res.json(book);
            }
            
        }
    });
    if (!found){
        res.json({status:"Book Not Found"});
    }
    
});



app.get("/books", function(req, res){
    res.sendFile(path.join(__dirname, "public/books.html"));
});

app.listen(PORT, function(){
    console.log("LISTENING ON PORT 3001")
})



