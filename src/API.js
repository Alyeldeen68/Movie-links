import react, { useEffect, useState } from "react";

const API = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    function fetchData() {
      fetch("https://hn.algolia.com/api/v1/search?query=redux")
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((err) => setError(err));
    }
    fetchData();
  }, []);
  return (
    <div>
      <div>
        <ul>
          {data.map((item) => (
            <li>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default API;
