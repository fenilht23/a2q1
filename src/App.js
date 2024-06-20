import { useEffect, useState } from "react";
import ChildComponent from "./ChildComponent";

const App = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Counter :- ' + count);
  }, [count]);


  return (
    <div className="container-sm mt-5">
      <div className="card text-center mx-5">
        <div className="card-header">
          <h1>Parent Component</h1>
        </div>
        <div class="card-body">
          <button className="btn btn-primary" onClick={() => setCount(prev => prev + 1)}>Increment</button>
        </div>
        <div class="card-body">
          <button className="btn btn-secondary" onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
      <ChildComponent count={count} setCount={setCount} />
    </div>
  )
}

export default App;