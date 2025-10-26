import { useState, useMemo } from "react";

export default function Planets() {
  const [search, setSearch] = useState("");

  const planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
  ];


  const filteredPlanets = useMemo(() => {
    console.log(search);
    return planets.filter((planet) =>
      planet.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div>
      <h2>Фільтр планет</h2>
      <input
        type="text"
        placeholder="Введи назву планети..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredPlanets.map((planet) => (
          <li key={planet}>
            {planet}
          </li>
        ))}
      </ul>
    </div>
  );
}