import server from "./index.js";
const PORT = 3000;
server.listen(PORT, (req, res) => {
    console.log("server is listening on PORT " + PORT);
});