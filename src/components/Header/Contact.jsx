import { Component } from "react";
import { AiFillMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <a href="arsalanaftab191@gmail.com">
          <AiFillMail />
          <span>arsalanaftab191@gmail.com</span>
        </a>

        <a href="tel:+92 00000000">
          <AiFillPhone />
          <span>+92 00000000</span>
        </a>
      </div>
    );
  }
}

export default Contact;
