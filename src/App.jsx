import Paths from "./routes/Paths";

const App = () => {

  function welcome(){
    alert("Welcome to the My First Project");
  }

  welcome();

  return (
    <>
    <Paths />
    </>
  );
}
 
export default App;