const GetUsers = (req, res) => {
    res.send('GET USERS');
};

const GetUser = (req, res) => {
    res.send('GET USERS = 1');
};

module.exports = {
    GetUsers,
    GetUser
}