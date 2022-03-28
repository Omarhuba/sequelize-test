const express = require("express");
const sequelize = require("./database");
const User = require("./User");
const messages = require("./messages");
const PORT = 8080;

sequelize.sync({force: true}).then(() => {
  console.log("db is ready!");
});

const app = express();

app.use(express.json());



app.post("/users", async (req, res) => {
  const data = await User.create(req.body);
  res.send(data);
  console.log(data);
});

app.get('/users', async(req,res)=>{
    const allUser = await User.findAll()
    res.send(allUser)
    console.log(allUser);
})

app.post('/messages', async (req, res) => {
    const {title} = await messages.create(req.body)
    res.send(title)
   
    console.log(title)
    // res.redirect('pages/home')
  
  })



app.listen(PORT, () => {
  console.log(`SERVER STARTED ON PORT: ${PORT}`);
});
