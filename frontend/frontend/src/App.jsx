import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  // const [count, setCount] = useState(0);
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("/api/data")
      .then((res) => {
        setdata(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <>
      <p>DATA:{data.length}</p>

      {data.map((data, index) => {
         return (<div key={data.id}>
          <h1>{data.first_name}</h1>
          <h1>{data.last_name}</h1>
        </div>)
      })}
    </>
  );
}

export default App;
