import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

export const app = express()
app.use(express.json())
app.use(cors())
app.use((req:any, res:any, next:any) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})

app.listen(process.env.PORT || 3003, () => {
    console.log(`Server is running on port ${process.env.PORT || 3003}`)
})