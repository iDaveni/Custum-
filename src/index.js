import ReactDom from "react-dom"
import React from "react"
import App from './components/app'
import "./style/style.scss"


const element = document.querySelector('#root');


ReactDom.render(<App />, element)