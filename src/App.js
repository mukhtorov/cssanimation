
import Flip from './animation/Flip'
import Rotate from './animation/Rotate'
import './App.css'

function App(props) {
  console.log(props.name)
  return (
    <div className="App">
      <Rotate>
         <h1 className="title">Welcome </h1>
      </Rotate>
     </div>
  );
}

export default App;
