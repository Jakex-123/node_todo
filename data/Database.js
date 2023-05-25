import mongoose from "mongoose";

export const ConnectDB = () => mongoose.connect(process.env.mongoURI, { dbName: 'backendap' }).then(() => {
    console.log('Db On')
}).catch((e) => {
    console.log(e)
})