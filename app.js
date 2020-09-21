const express= require("express")
const bodyParser= require("body-parser")
const ejs= require("ejs")
const mongoose = require("mongoose")
var connect4=
{ turn:0,
  gameArray:
  [
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0]
]
}
var col=99
const app = express()
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
const Connect4=mongoose.model("Connect4",connect4)
mongoose.connect("mongodb+srv://suryapal:12345six@cluster0.bfzxp.gcp.mongodb.net/connect4?retryWrites=true&w=majority",{ useNewUrlParser: true })

app.get("/start",(req,res)=>{
  console.log(req)


Connect4.update({},connect4, function(err, resp) {
 if (err) throw err;
 console.log("1 document updated");
})
res.send("ready!")
})
app.post("/start",(req,res)=>{
  var table={}
var ret=0
col=req.body.column
Connect4.find(function(err,response){
table=response
console.log(col);
ret=(updateTable(col,table[0].turn,table[0].gameArray));
if(ret===1){
res.send("valid")}
else{

  res.send("invalid")
}
})

})

function updateTable(col,turn,gameAr){
  if(col<0 || col>6){
  return(0)}
  turn=turn+1
if(turn==1){
return(upTableOdd(col,turn,gameAr))
}
else if (turn%2.0===0) {
return(upTableEven(col,turn,gameAr))
}
else{
  return(upTableOdd(col,turn,gameAr))


}

}

function upTableOdd(col,turn,gameAr){
var i=0

if(gameAr[i][col]!==0){
  return(0)
}
if(gameAr[5][col]===0)
{
  gameAr[5][col]=1
  console.log("win",checkIfwin(gameAr));
  updateTabInDb(turn,gameAr)
  return(1)

}
while(i<6){
  if(gameAr[i][col]===0){
    i=i+1
  }

  else{gameAr[i-1][col]=1
    console.log("win",checkIfwin(gameAr));

    updateTabInDb(turn,gameAr)

    return(1)

  }
}

}

function upTableEven(col,turn,gameAr){
var i=0
console.log("here")

if(gameAr[i][col]!==0){
  return(0)
}
if(gameAr[5][col]===0)
{
  gameAr[5][col]=2
  console.log("win",checkIfwin(gameAr));


  updateTabInDb(turn,gameAr)
  return(1)

}
while(i<6){
  if(gameAr[i][col]===0){
    i=i+1
  }
  else{gameAr[i-1][col]=2
    console.log("win",checkIfwin(gameAr));


    updateTabInDb(turn,gameAr)

    return(1)

  }
}

}
function   updateTabInDb(turn,gameAr){
  var newvalues={
    turn:turn,
    gameArray:gameAr
  }
  Connect4.update({}, newvalues, function(err, res) {
   if (err) throw err;
   console.log("1 document updated");
})
}
function chkLine(a,b,c,d) {
    // Check first cell non-zero and all cells match
    return ((a != 0) && (a ==b) && (a == c) && (a == d));
}
function checkIfwin(bd){

      // Check down
      for (r = 0; r < 3; r++)
          for (c = 0; c < 7; c++)
              if (chkLine(bd[r][c], bd[r+1][c], bd[r+2][c], bd[r+3][c]))
                  return bd[r][c];

      // Check right
      for (r = 0; r < 6; r++)
          for (c = 0; c < 4; c++)
              if (chkLine(bd[r][c], bd[r][c+1], bd[r][c+2], bd[r][c+3]))
                  return bd[r][c];

      // Check down-right
      for (r = 0; r < 3; r++)
          for (c = 0; c < 4; c++)
              if (chkLine(bd[r][c], bd[r+1][c+1], bd[r+2][c+2], bd[r+3][c+3]))
                  return bd[r][c];

      // Check down-left
      for (r = 3; r < 6; r++)
          for (c = 0; c < 4; c++)
              if (chkLine(bd[r][c], bd[r-1][c+1], bd[r-2][c+2], bd[r-3][c+3]))
                  return bd[r][c];

      return 0;

}
app.listen(3000,function(){
  console.log("working")
})
