function App() {
  const [count, setCount] = useState(0);
  console.log("Rendered!");

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}


