import { app } from "./app.js";
import { ConnectDB } from "./data/Database.js";

ConnectDB()

app.listen(process.env.PORT, () => {
    console.log(`working on: ${process.env.PORT} in ${process.env.NODE_ENV} `)
})