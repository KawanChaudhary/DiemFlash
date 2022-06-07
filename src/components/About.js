import React, { Component } from "react";

export class About extends Component {
  // 
  render() {
    document.title = "DiemFlash - About"
    const goTop = () => window.scrollTo(0, 0);
    goTop();
    return (
      
      <section className="about-us py-5 " id="about-us">
        
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <h1 className="text-success">Welcome!</h1>
              <h2>Know More About DIEMFLASH.</h2>
              <hr />
              <p>
                Hello, I am a software engineer who improving his skills in many
                fields. If you like my web-app so you guys can come and read
                news anytime anywhere. News will be available.
              </p>
              <p>
                This is News API web-app that is totally free to read your
                genres news. And the developer is using it as a project.
				For any other query, you can contact me on social-website or E-mail or Phone. All details are in footer.
              </p>
				Happy Coding {":)"}
            </div>
            <div className="col-md-6 my-auto">
              <img
                src="http://themebubble.com/demo/marketingpro/wp-content/uploads/2016/10/seo-slide.png "
                alt=""
                width="100%"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
