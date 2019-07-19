import React,{Component} from "react";

class FooterCustom extends Component{
  render(){
    return (
      <footer
        className="footer-header"
        style={{
          height: '60px',
          textAlign: 'center',
          backgroundColor: '#fff'
        }}
      >
        <h2>Footer</h2>
        React-Admin ©{new Date().getFullYear()} Created by xxx@163.com
      </footer>
    )
  }
}
export default FooterCustom;
