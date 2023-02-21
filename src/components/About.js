import React, { Component } from "react";
import { Icon } from "@iconify/react";
// import angularIcon from "../../public/images/Threejs-logo.svg";
import reactIcon from "@iconify/icons-logos/react";
import vueIcon from "@iconify/icons-logos/javascript";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: '#fff' }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <svg style={{height:'45px',width:'45px',fontSize: "400%", margin:" 9% 5% 0px"}}
                    fill="none"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    version="1.1"
                    viewBox="0 0 226.77 226.77"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      transform="translate(8.964 4.2527)"
                      fillRule="evenodd"
                      stroke="#000"
                      strokeLinecap="butt"
                      strokeLinejoin="round"
                      strokeWidth="4"
                    >
                      <path d="m63.02 200.61-43.213-174.94 173.23 49.874z" />
                      <path d="m106.39 50.612 21.591 87.496-86.567-24.945z" />
                      <path d="m84.91 125.03-10.724-43.465 43.008 12.346z" />
                      <path d="m63.458 38.153 10.724 43.465-43.008-12.346z" />
                      <path d="m149.47 62.93 10.724 43.465-43.008-12.346z" />
                      <path d="m84.915 125.06 10.724 43.465-43.008-12.346z" />
                    </g>
                  </svg>
                  {/* <Icon
                    icon={angularIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  /> */}
                  <Icon
                    icon={reactIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={vueIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello}</span>
                    <br />
                    <br />
                    {about}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
