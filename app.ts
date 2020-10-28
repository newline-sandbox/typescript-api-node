import express from "express"
import path from "path"

const app = express()
const port = 3000 

app.use('/dist', express.static('dist'))

// Set server to listen on defined port
app.listen(port, () => console.log(`Server running on localhost:${port}`))