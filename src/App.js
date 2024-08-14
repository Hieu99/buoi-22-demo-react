import "./App.css";
import Hearder from "./components/Header.jsx";
import Menu from "./components/Menu.jsx";
import Footer from "./components/Footer.jsx";
import Data from "./components/Data.jsx";

let data = "Header with props";

function App() {
  return (
    <div style={{ padding: "0 20px" }}>
      <Hearder title={data} count={100} subContent="ABC"></Hearder>
      <div
        style={{
          height: "500px",
          display: "flex",
          gap: "10px",
          width: "100%",
          padding: "10px 0",
        }}
      >
        <Menu></Menu>
        <Data></Data>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
