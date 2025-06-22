const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv')

dotenv.config();

const usersRouter = require("./resources/users/users.router");
const projectsRouter = require("./resources/projects/projects.router");
const AuthRouter = require("./resources/auth/auth.router")
const app = express();


// Middlewares
app.use(express.json());
app.use(morgan('dev'));



// Routers
app.get('/', (req, res) => {
    res.send('Servidor corriendo');
})

    app.use("/users", usersRouter);
    app.use("/projects",projectsRouter);
    app.use("/auth", AuthRouter)


app.listen(3000, () => {
    console.log("Server is running on port 3000")
    
})