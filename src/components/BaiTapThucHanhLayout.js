import React, { Component } from 'react'
import Header from "./header";
import Banner from "./banner";
import Item from "./item";
import Footer from "./footer";



export class BaiTapThucHanhLayout extends Component {
  render() {
    return (
        <div>
            <Header />
            <Banner />
            <Item />
            <Footer />
        </div>
    )
  }
}

export default BaiTapThucHanhLayout