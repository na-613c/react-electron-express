import React, { useEffect, useState } from "react";

const App = () => {
  const [state, setState] = useState("");

  useEffect(() => {
    const f = async () => {
      let response = await fetch('http://localhost:2000');
      if (response.ok) {
        // если HTTP-статус в диапазоне 200-299
        // получаем тело ответа (см. про этот метод ниже)
        let json = await response.json();
        console.log(json);
        setState(json.value);
      } else {
        console.log("Ошибка HTTP: " + response.status);
      }
    };
    f()
  },[]);

  return <h1>{state}</h1>;
};

export default App;
