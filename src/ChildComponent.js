const ChildComponent = ({ count, setCount }) => {
  return (
    <div className="card text-center mt-5 mx-5">
      <div className="card-header">
        <h1>Child Component</h1>
      </div>
      <div class="card-body">
        <h5 class="card-title">Counter Demo  :- {count}</h5>
      </div>
    </div>
  )
}

export default ChildComponent;