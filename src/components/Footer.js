import React, { Component } from "react";

class Footer extends Component {
  render() {
    var networks;
    if (this.props.sharedBasicInfo && this.props.sharedBasicInfo.social) {
      networks = this.props.sharedBasicInfo.social.map(function (network) {
        if (!network) {
          return null;
        }
        return (
          <>
          <span key={network.name} className="m-4">
                <a href={network.url} target="_blank" rel="noopener noreferrer">
                  <i className={network.class}  ></i>
                </a>
              </span>
            {/* {network.name === "Email" ? (
              // <p>Welcome to Facebook!</p>
              <span key={network.name} className="m-4">
                <a
                  // href={`mailto:caortegayate@gmail.com`}
                  href={`tel:+573275079517`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={network.class}></i>
                </a>
              </span>
            ) : (
              
              // <p>Hello, {network.name} user!</p>
            )} */}
          </>
        );
      });
    }

    return (
      <footer>
        <div className="col-md-12">
          <div className="social-links" style={{ fontSize: "40px" }}>
            {networks}
          </div>

          <div className="copyright py-4 text-center">
            <div className="container">
              <small>
                Copyright &copy;{" "}
                {this.props.sharedBasicInfo
                  ? this.props.sharedBasicInfo.name
                  : "???"}
              </small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
