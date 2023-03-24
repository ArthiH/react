import { Component, createElement } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";




const root = ReactDOM.createRoot(document.getElementById("root"));


// const myElement = createElement("h1", { className: "arthi" }, "hello");


class Home extends Component {
  render() {
    return <main className="home">
      <p>Home component1</p>
      <p>Home component2</p>
      <p>Home component3</p>
    </main>
  }
}


const AboutusStyle = {
  title: {
    fontSize: "50px"
  },
  img: {
    maxWidth: "400px"
  }
}


class Aboutus extends Component {
  render() {
    return <>
      <h2 style={AboutusStyle.title}>About page</h2>
      <img style={AboutusStyle.img} src="https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg" alt="img" width="100%" />
    </>
  }
}





root.render(
  <>
    <Aboutus />
    <Home />
  </>
);






// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
