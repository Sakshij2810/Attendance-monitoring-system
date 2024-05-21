import express, { urlencoded } from "express";
import cors from "cors";
import mongoose from "mongoose";

//import routes
import userRoutes from "./routes/users.js";

const app = express();

const PORT = process.env.PORT || 8080;

app.use(urlencoded({ extended: true, limit: "30mb" }));
app.use(express.json({ extended: true, limit: "30mb" }));
app.use(cors());

//routes middleware
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send(`This is a Attendance Monitoring System API`);
});

const CONNECTION_URL =
  "mongodb+srv://sayalijagtap330:CGVj3WUOYPrxe7Du@attendance-monitoring-s.ze0zfqe.mongodb.net/?retryWrites=true&w=majority&appName=attendance-monitoring-system";

mongoose
  .connect(CONNECTION_URL, {})
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`);
    })
  )
  .catch((error) => console.log(error.message));
