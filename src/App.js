import "./App.css";
import Name from "./Components/Name";
import Job from "./Components/Job";
import Hobbies from "./Components/Hobbies";

// App.js is the root component that houses all other components
// App.js is the root/main component that wraps the other components

function App() {
  return (
    <div>
      <h1>
        <p className="App">Assignment - Video 44</p>
      </h1>

      <Name />
      <Job />
      <Hobbies />
    </div>
  );
}

export default App;
