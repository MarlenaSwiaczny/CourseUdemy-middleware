import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

// ścieżka do pliku w projekcie
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

//body-parser - pozwala przechwycić request body w formie {key: value}
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  console.log("i had get request!", __dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log("Submitted, i had a post request!");
  console.log(req.body);
  res.send(`<h1>Your band name is:</h1><h2>${req.body.street} ${req.body.pet}</h2>`)
})

app.listen(port, () => {
  console.log(`Server started on: http://localhost:${port}`);
});
