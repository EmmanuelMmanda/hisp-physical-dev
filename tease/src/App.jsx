import "./App.css";
import Table from "./table";
import data from './json-data.json'

function App() {
  return <>
    <div>
      <Table data={data}/>
    </div>
  </>;
}

export default App;
