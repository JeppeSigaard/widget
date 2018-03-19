import express from "express";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import request from "request";
import { stringify } from "query-string";
import { APPID, BASEURL } from "../config";
import template from "./template";
import App from "./app";
const server = express();

// Static
server.use(express.static("public/"));

// Index
server.get("/", (req, res) => {
  const city = req.query.city || "Copenhagen";
  const params = stringify({ q: city, appid: APPID, units: "metric" });
  request(`${BASEURL}?${params}`, (error, response, body) => {
    const initialState = JSON.parse(body);
    const html = ReactDOMServer.renderToString(<App {...initialState} />);
    res.send(template(html, initialState));
  });
});

// 404
server.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// 500
server.use((err, req, res, next) => {
  res.status(err.status || 500).render("error", {
    message: err.message
  });
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
