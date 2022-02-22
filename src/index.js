import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { Style } from "./Style";
import { Memo } from "./Memo";
import {AdminFlagProvider} from "./components/providers/AdminFlagProvider"

ReactDOM.render(
    <React.StrictMode>
      <AdminFlagProvider>
        <App />
      </AdminFlagProvider>
    </React.StrictMode>,
    document.getElementById("chap1")
);
ReactDOM.render(
    <React.StrictMode>
        <Style />
    </React.StrictMode>,
    document.getElementById("chap2")
);
ReactDOM.render(
    <React.StrictMode>
        <Memo />
    </React.StrictMode>,
    document.getElementById("chap3")
);