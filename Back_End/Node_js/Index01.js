const http = require('http');

const server= http.createServer(handleRoot)

const coruse ={
 name:"sanju",
 mail:"rajukari724@gmail.com",
 phone:" 123456789",
 id:"001"
}

const coruse1 = {
    ID1:{
            name:"001",
            mail:"001@gmail.com",
            phone:" 123456789",
          },
    ID2:{
            name:"002",
            mail:"002@gmail.com",
            phone:" 123456789",
         },
    ID3:{
            name:"003",
            mail:"003@gmail.com",
            phone:" 123456789",
         },
    ID4:{
            name:"004",
            mail:"004@gmail.com",
            phone:" 123456789",
         },

        }


function handleRoot(req, res){
        res.writeHead(200,{"content-type" : "application/json"})
    res.end(JSON.stringify(  coruse1))

}

server.listen(3000,()=>{
    console.log("server is runing")
})