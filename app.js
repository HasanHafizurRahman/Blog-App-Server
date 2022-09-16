//user: HasanShanto pass: hcl0ozMdIS1clpg7
// npx kill-port 9000
import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
// import blogRouter from "./routes/blog-routes";
import blogRouter from "./routes/blog-routes"
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog", blogRouter);

mongoose.connect("mongodb+srv://HasanShanto:hcl0ozMdIS1clpg7@cluster0.fpeawhd.mongodb.net/?retryWrites=true&w=majority").then(() => app.listen(9000)).then(() => console.log('Connected To The MongoDB')).catch((err) => console.log(err));
;