const express = require("express");
const app = express();
const port = 3000;

const categoriesRouter = require("./routes/categories");

//routes
app.use("/categories", categoriesRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
