import React, { Component } from "react";

export class newitem extends Component {
  timeminute = (date) => {
    date.setHours(date.getHours() + 5);
    date.setMinutes(date.getMinutes() + 30);
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " Years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " Months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return (
        Math.floor(interval) + (Math.floor(interval) > 1 ? " Days" : " Day")
      );
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return (
        Math.floor(interval) + (Math.floor(interval) > 1 ? " Hours" : " Hous")
      );
    }
    interval = seconds / 60;
    if (interval > 1) {
      return (
        Math.floor(interval) +
        (Math.floor(interval) > 1 ? " Minutes" : " Minute")
      );
    }
    return "Just Now";
  };
  render() {
    let { title, urlImage, url, idName, author, time } = //add description in you need it
      this.props;
    return (
      <div>
        <div className="card border-dark my-2 p-1" style={{ width: "17rem" }}>
          
          <img
            style={{ height: "10rem" }}
            src={
              urlImage
                ? urlImage
                : "https://i.ibb.co/DWyYBH8/Markus-winkler-a-B4-BJSZo-TTI-unsplash.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
          <span
            className="position-absolute top-0 badge round-pill bg-danger" style={{right: "0"}}
          >
            {idName}
          </span>
            <h5 className="card-title text-center">{title ? title : ""}</h5>

            {/* <p className="card-text">{description ? description : ""}...</p> */}
            <div className="text-center">
              <a
                className="btn btn-sm btn-outline-success "
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                Read More
              </a>
              <hr />
              <p className="card-text">
                <small className="text-muted">
                  By {author} | {this.timeminute(new Date(time))} Ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default newitem;
