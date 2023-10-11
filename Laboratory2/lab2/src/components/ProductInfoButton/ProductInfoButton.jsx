import React, { Component } from "react";

export default class ProductInfoButton extends Component{
    onClickPage(){
        window.location.assign('http://localhost:3000/productInfo/')
    }

    render(){
        return (
            <button onClick={(e) => this.onClickPage(e)}>Детальний опис товару</button>
        )
    }
}