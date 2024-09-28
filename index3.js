import express from "express";

const app = express();
const port = 3000;

// mój własny middleware logger: 
function logger(req, res, next) {
  res.send("My middleware logger was used")
 console.log("Request method", req.method);
 console.log("Request url", req.url);
 next()
};


/* lub 

var logger = (req, res, next) => {
  res.send("My middleware logger was used")
 console.log("Request method", req.method);
 console.log("Request url", req.url);
 next()
};
*/


app.use(logger);

app.get("/", (req, res) => {
  // res.send("Hello");
  // gdy w middleware użyjemy res.send, to w get już nie zadziała
});

app.listen(port, () => {
  console.log(`Server started on: http://localhost:${port}`);
});
