//including path package to get the file path to our html
let path = require("path");

//routing HTML get requests
module.exports = function(app) {
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    app.get("/", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}