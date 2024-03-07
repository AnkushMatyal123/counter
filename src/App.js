import "./App.css";
import Counters from "./components/Counters";
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const data = [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ];

  const [counter, setCounter] = useState(data);
  const handleIncrement = (id) => {
    setCounter((prevCounters) => {
      return prevCounters.map((counter) => {
        if (counter.id === id) {
          return { ...counter, value: counter.value + 1 };
        }
        return counter;
      });
    });
  };
  function handleDecrement(item) {
    setCounter((prevCounters) => {
      return prevCounters.map((counter) => {
        if (counter.id === item && counter.value > 0) {
          return { ...counter, value: counter.value - 1 };
        }
        return counter;
      });
    });
  }
  function handleDelete(item) {
    const filterData = counter.filter((val) => val.id !== item);
    setCounter(filterData);
  }
  function handleReset() {
    setCounter(data);
  }
  function handleRefresh() {
    setCounter((prevCounter) =>
      prevCounter.map((item) => ({ id: item.id, value: 0 }))
    );
  }
  return (
    <div className="parent">
      <div className="card-box">
        <div className="card-item-1">
          <Navbar
            totalCount={counter?.filter((item) => item.value > 0).length}
          />
        </div>
        <div className="card-item-2">
          <Counters onReset={handleReset} onRefresh={handleRefresh} />
        </div>
        <div className="card-item-3">
          {counter.length > 0 ? (
            counter?.map((item, i) => {
              return (
                <div key={i}>
                  <Counter
                    id={item.id}
                    value={item?.value}
                    counter={item}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    onDelete={handleDelete}
                  />
                </div>
              );
            })
          ) : (
            <p className="data-not-found m-0">Data Not Found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
