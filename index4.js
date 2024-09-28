import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

var bandName;

const __dirname = dirname(fileURLToPath(import.meta.url));



app.use(bodyParser.urlencoded({extended: true}));

function bandGenerator(req, res, next) {
  console.log("Function bandGenerator was used!")
  bandName = req.body["street"] + " " + req.body["pet"];
  next();
}

// middleware używający funkcji
app.use(bandGenerator);

app.get("/", (req, res) => {
  console.log(import.meta.url);
  console.log(fileURLToPath(import.meta.url));
  console.log(dirname(fileURLToPath(import.meta.url)));
  console.log("Get was used!");
  
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req,res) => {
  console.log("Submit post was used!");
  console.log("Request: ", req.body, "BandName: ", bandName);
  // res.send(`<h2>Your band name is: ${req.body.street} ${req.body.pet}.</h2>`)
  res.send(`<h2>Your band name is: ${bandName}!</h2>`)
})

app.listen(port, () => {
  console.log(`Server started on: http://localhost:${port}`);
});
