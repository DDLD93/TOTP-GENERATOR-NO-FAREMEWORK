const express = require("express");
const totp = require("totp-generator");
const PORT = 3001;
const app = express();
var data1 
var data2 = []
 

app.get('/auth/:keys', (req, res) =>{
  data2 = []
  data1 = req.params.keys
  data1 = data1.split(',')
  
  data1.map((e) => {
   data2.push(totp(e))
    data1 = data2
  })
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.send(data1.join(' '))
})
  

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});