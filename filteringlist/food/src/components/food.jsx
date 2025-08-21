import React, { useState } from "react";

const foods = [
  {
    name: "Sushi",
    description: "Sushi is a traditional Japanese dish of prepared vinegared rice",
  },
  {
    name: "Dal",
    description:
      "The most common way of preparing dal is in the form of a soup to which onions, tomatoes and various spices may be added",
  },
  {
    name: "Pierogi",
    description:
      "Pierogi are filled dumplings made by wrapping unleavened dough around a savoury or sweet filling and cooking in boiling water",
  },
  {
    name: "Shish kebab",
    description:
      "Shish kebab is a popular meal of skewered and grilled cubes of meat.",
  },
  {
    name: "Dim sum",
    description:
      "Dim sum is a large range of small dishes that Cantonese people traditionally enjoy in restaurants for breakfast and lunch",
  },
];

function App() {
  const [search, setSearch] = useState("");

  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ fontFamily: "Arial", margin: "20px" }}>
      <h2>Search:</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search food..."
        style={{
          padding: "8px",
          width: "100%",
          marginBottom: "15px",
          fontSize: "16px",
        }}
      />
      <hr />
      <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food, index) => (
            <div key={index} style={{ marginBottom: "15px" }}>
              <strong>{food.name}</strong>
              <p style={{ margin: "5px 0" }}>{food.description}</p>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}

export default App;
