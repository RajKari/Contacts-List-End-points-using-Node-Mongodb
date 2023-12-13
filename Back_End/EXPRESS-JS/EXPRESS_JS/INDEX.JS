const express  =  require("express")
const path = require('node:path')
const app =  express()

app.get("/", handleRoot)

app.get("/Info", handleInfo)

app.get("/About", handleAbout)

app.get('/sayhi/:name', handleSay)

function handleSay(req,res){
    let name = req.params.name
    res.send("HI "+" " + name)
}

app.get("/", handleRoot)
function handleRoot(req,res){
    // res.send("root route")
    // res.sendFile('D:/Back_End/EXPRESS-JS/EXPRESS_JS/RootCode.HTML')
    res.sendFile(path.join(__dirname,'RootCode.html'))
}

function handleInfo(req,res){
    res.send(" Info route")
}
function handleAbout(req,res){
    res.send("About route")
}

app.listen(3000, () => {
    console.log('server is running')
} )
