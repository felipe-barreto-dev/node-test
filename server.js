const express = require('express');

const app = express();
app.use(express.json())

app.get("/", (res, req) => {
    return `<h1>Hello, world</h1>`
})

app.listen("5000", console.log("voov"))