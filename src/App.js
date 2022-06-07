import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/news";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import "./App.css";
import Favicon from "react-favicon";
import Footer from "./components/footer";
import About from "./components/About";

export class App extends Component {
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <>
        <Favicon url="../public/favicondf.ico" />
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            // #228B22
            progress={this.state.progress}
          />

          <Switch>
            <Route exact path="/general"><News
            setProgress={this.setProgress}
            key="general"
            pageSize={12}
            category="general"
            country="in"
          /></Route>
            <Route exact path="/business">
              <News
                setProgress={this.setProgress}
                key="business"
                pageSize={12}
                category="business"
                country="in"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                setProgress={this.setProgress}
                key="entertainment"
                pageSize={12}
                category="entertainment"
                country="in"
              />
            </Route>
            <Route exact path="/health">
              <News
                setProgress={this.setProgress}
                key="health"
                pageSize={12}
                category="health"
                country="in"
              />
            </Route>
            <Route exact path="/science">
              <News
                setProgress={this.setProgress}
                key="science"
                pageSize={12}
                category="science"
                country="in"
              />
            </Route>
            <Route exact path="/technology">
              <News
                setProgress={this.setProgress}
                key="technology"
                pageSize={12}
                category="technology"
                country="in"
              />
            </Route>
            <Route exact path="/sports">
              <News
                setProgress={this.setProgress}
                key="sports"
                pageSize={12}
                category="sports"
                country="in"
              />
            </Route>
            <Route path="/about"><About setProgress={this.setProgress} /></Route>
          </Switch>
        </Router>
        <Footer setProgress={this.setProgress} />
      </>
    );
  }
}

export default App;
