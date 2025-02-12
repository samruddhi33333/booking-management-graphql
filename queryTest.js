fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: "{ bookings { id name destination } }" }),
  })
    .then((res) => res.json())
    .then((data) => console.log("GraphQL Response:", data))
    .catch((err) => console.error("Error fetching data:", err));
  