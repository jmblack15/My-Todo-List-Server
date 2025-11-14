import express from "express";
import { UserRoute } from "./routes/user.route.js";
import { errorHandlerMiddleware } from "./middlewares/errorhandle.middleware.js";

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use("/api/v1/users", UserRoute())
app.use(errorHandlerMiddleware)

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})