import express from "express";
import { fileURLToPath } from "url";
import path from "path";

//serve static files
const _filename = fileURLToPath(import.meta.url); //file path name
const __dirname = path.dirname(_filename); //folder path name

const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {
  console.log("server running on port 3000");
});
