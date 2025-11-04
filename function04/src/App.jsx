const App = () => {
  return (
    <div>
      <div
        onMouseEnter={() => {
          document.querySelector(".box").style.backgroundColor = "red";
        }}
        onMouseLeave={() => {
          document.querySelector(".box").style.backgroundColor = "yellow";
        }}
        className="box"
      ></div>
    </div>
  );
};

export default App;
