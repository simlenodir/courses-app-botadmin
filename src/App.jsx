import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://course-bot-again.herokuapp.com/courseRequest")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [data]);
  return (
    <div className="App container">
      <h3 className="text-center">Admin page of Courses </h3>
      <ul>
        {data.length &&
          data.map((e, i) => (
            <li key={i}>
              <div class="card" style="width:400px">
                <div class="card-body">
                  <h4 class="card-title">{e.name}</h4>
                  <p class="card-text">
                    {e.location}
                  </p>
                  <span>{e.phone}</span>
                  <a href="#" class="btn btn-primary">
                    See Profile
                  </a>
                </div>
              </div>
              {/* <h4>{e.name}</h4>
              <p>{e.location}</p>
              <span>{e.phone}</span>
              <button className="btn btn-success-primary"></button> */}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
