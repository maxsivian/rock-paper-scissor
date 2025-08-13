import express from "express"
import dotenv from "dotenv"
import path from "path"
import { fileURLToPath } from "url"

dotenv.config()

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

if (!process.env.PORT) {
    console.log("PORT MISSING !");
    process.exit(1)
}

const port = process.env.PORT

app.use(express.static(path.join(__dirname, "../dist")))

app.get(/^\/(.+)$/, (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
})

app.get('/test', (req, res) => {
    res.send('TEST')
})

app.listen(port, () => {
    console.log(`RPS frontend serving backend listening on port ${port}`)
})
