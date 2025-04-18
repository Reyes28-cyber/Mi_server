const express = require('express');
const morgan = require('morgan');

const usersRouter = require("./resources/users/users.router");
const projectsRouter = require("./resources/projects/projects.router")


const MessageMiddleware = require("./middlewares/message.middlewares")
const app = express();


// Middlewares
app.use(morgan('dev'));



// Routers
app.get('/', (req, res) => {
    res.send('Servidor corriendo');
})

app.use("/users", usersRouter);
app.use("/projects",projectsRouter)


app.listen(3000, () => {
    console.log("Server is running on port 3000")
  
})