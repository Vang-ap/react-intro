export function App() {
  const a = true;

  return (
    <>
      <div
        style={{
          backgroundColor: "red",
          height: a ? "100px" : "200px",
          width: "100px",
          border: "1px solid black",
        }}
      ></div>
    </>
  );
}
