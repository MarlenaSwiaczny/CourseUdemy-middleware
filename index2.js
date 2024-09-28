import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(morgan("combined")); 
//"combined", "tiny" 
// morgan pokazuje informacje (skrócone) na temat request get

app.get("/", (req, res) => {
  res.send("New get request!");
});

app.listen(port, () => {
  console.log(`Server started on: http://localhost:${port}`);
});
