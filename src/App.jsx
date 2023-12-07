import {useState, useEffect} from "react";
import Quote from "./Components/Quote";
import axios from "axios";
import "./App.css";

function App() {
    const [oneQuote, setOneQuote] = useState({data: {content: "", author: ""}});
    const fetchQuote = async() => {
      try {
        let response = await axios.get("https://api.quotable.io/random");
        setOneQuote(response);
      } catch(err) {
        console.log(err);
      }
    };
    const resetQuote = function() {
      fetchQuote();
    }
    useEffect(() => {
        fetchQuote();
    }, []);
  return (
    <div id="innerBox">
      <Quote quote={oneQuote}/>
      <button onClick={resetQuote} id="btn">New Quote</button>
    </div>
   );
}

export default App;