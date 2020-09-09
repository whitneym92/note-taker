const db = require("../db/db.json");
const fs = require("fs");

//routes 
module.exports = function(app) {
    //get request
    app.get("/api/notes", function(req, res) {
        res.json(db);
    });

    //post request
    app.post("/api/notes", function(req, res) {
        db.push(req.body);
        db.forEach((obj, j) => {
            obj.id = j + 1;
        })
        fs.writeFile("./db/db.json", JSON.stringify(db), () => {
            res.json(db);
        })
    });

    //delete request
    app.delete("/api/notes/:id", function(req,res) {
        let id = req.params.id;
        db.splice(id -1, 1);
        db.forEach((obj, j) => {
            obj.id = j + 1;
        });
        fs.writeFile("./db/db.json", JSON.stringify(db), () => {
            res.json(db);
        });
    });
};