const { use } = require('../Router/userRouter');
const connection = require('./../DataBase/dbConnection');

exports.createUser = (req, res) => {
    const {username, email, password} = req.body;
    const user = {
        username: username,
        email: email,
        password: password
    }

    // connection.query(`INSERT INTO users(username, email, password, mobile) value(${JSON.stringify(username)})`, () => {});

    connection.query(`SELECT * from users`, (error, result) => {
        if(error) throw new Error("Something went wrong!!");

        result.forEach(item => {
            if(item.username == username) {
                throw new Error("Username already exist!!");
            }
        });

        connection.query("INSERT INTO users SET ?",[user], (error, result) => {
            if(error) throw new Error("Something went wrong!!");

            res.send("User added successfully!!");
        });
    });
};

exports.getUser = (req, res) => {
    connection.query("select * from users", (error, result) => {
        if(error) throw new Error("Something went wrong");

        res.send(result);
    })
};

exports.viewUser = (req, res) => {
    const id = req.params.id;
    connection.query("select * from users WHERE id=?", [id], (error, result)=> {
        if(error) throw new Error("something went wrong");

        res.send(result);
    })
};

exports.updateUser = (req, res) => {
    const id = req.params.id;
    const username = req.body.username;
    connection.query("update users SET username=? WHERE id=?", [username, id], (error, result) => {
        if(error) return console.log(error);
    });

    connection.query("select * from users WHERE id=3", (error, result) => {
        if(error) return console.log(error);

        res.send(result);
    });
};

exports.deleteUser = (req, res) => {
    const id = req.params.id;
    connection.query("delete from users where id=?", [id], (error, result) => {
        if(error) return console.log(error);

        res.send(result);
    })

};
