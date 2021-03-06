import "./App.scss";
import { Customers } from "./components/Customers";
import { Employees } from "./components/Employees";

function App() {
  return (
    <div className="App">
      <div className="title">
        <img src="images/icon.png" alt="logo" />
        <h1>Simple Usecontext App</h1>
      </div>
      <hr />
      <Customers />
      <hr />
      <Employees />
      <hr />
    </div>
  );
}

export default App;
