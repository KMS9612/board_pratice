const express = require('express');
const path = require("path");

const app = express();
const PORT = 5000;

// static파일의 경로
app.use(express.static(path.join(__dirname,'../../dist')));

app.get("/api", (req,res) => {
    res.json({message:"Hello Express"});
})

app.listen(PORT, () => {
    console.log(`${PORT}번 포트에서 서버 작동중...`)
});