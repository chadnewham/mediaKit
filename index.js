const bodyParser = require('body-parser');

let express = require('express');
let app = express();
let path = __dirname + "/public"

app.use("/public", express.static(path));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});
app.get('/test',(req,res)=>{
    res.sendFile(__dirname + '/views/indexNew.html');
});


const listener = app.listen(3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
});