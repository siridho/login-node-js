const app = (module.exports = require("express")());
const {
 getAll,
 getDetail,
 createUser,
 login
} = require("../controllers").users;

app.get("/", getAll);
app.get("/:userId", getDetail);
app.post("/create", createUser);
app.post("/login", login);
