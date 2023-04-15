const express = require("express");
const app = express();




app.listen(3000, () => {
    console.log(`listening to port 3000....`);
});

const routeHandler = (req, res) => {
    let data = ["menna", "samy", "mohamed", "emam"];
    var list = "<ul>"
    data.forEach(function (item) {
        list += "<li>" + item + "</li>";
    });

    list += "</ul>";
    res.send(list);
};


app.get("/students", routeHandler);