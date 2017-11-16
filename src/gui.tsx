import * as React from "react"
import * as ReactDOM from "react-dom"
import "../sass/style.scss"

ReactDOM.render(
    <div>
        <h1>Electron with TypeScript and React (and SCSS)</h1>
        <p>Node version: {process.versions.node}</p>
        <p>Electron version: {process.versions.electron}</p>
        <p>Chrome version: {process.versions.chrome}</p>
    </div>,
    document.getElementsByTagName("body")[0]
)
