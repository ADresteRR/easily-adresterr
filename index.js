import express from "express";

const server = express();

server.get("/", (req, res) => {
    res.send("server is working fine");
})
export default server;