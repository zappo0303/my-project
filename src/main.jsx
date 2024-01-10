import ReactDOM from 'react-dom/client'
const root = document.getElementById('root');
const myName = "Zap";
const myAge = "20";
const isMarrid = true;
const myInfo = {
  name: "Zap",
  age: 20,
};

ReactDOM.createRoot(root).render(
  <>
  <h1>Hello {myName}</h1>
  <p>Age: {myAge}</p>
  <p>Status: {isMarrid ? "Da co vo " : "Pede" }</p>
  <p>
    Info: {myInfo.name} - {myInfo.age}
  </p>
  <p>102</p>
  </>
);
