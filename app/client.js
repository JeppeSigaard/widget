import React from "react";
import { hydrate } from "react-dom";
import App from "./app";

const entry = document.getElementById("entry");
hydrate(<App {...window.initialState} />, entry);
