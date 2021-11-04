import React from "react"
import style from './style.module.scss'
class MenuItem extends React.Component {
    render() {
        return(
<div>
<div ><a className={style.item} href=''>{this.props.title}</a></div>
</div>
        )
    }
};
export default MenuItem


