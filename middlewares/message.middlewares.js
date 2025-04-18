const MessageMiddleware = (req, res, next) => {
    console.log("###### YO SOY UN MIDDLEWARE ######")
    next()

// if(false){
//     console.log("Usuario autentificado")
//     next()
// } else{
//     console.log("Usuario no autentificado")
//     res.send("Usuario no autentificado")
// }
}

module.exports = MessageMiddleware