// let count = 0;
function update() {
  count++;
  document.getElementById("btn").innerText = count; // ম্যানুয়ালি DOM আপডেট
}


function App() {
  const [count, setCount] = useState(0);
  console.log("Rendered!");

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}