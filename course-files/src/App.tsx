'index.css';
import Button from "./Components/Button";

function App() {

  const user = 'Josh';

  return (
    <>
      <div>
        <h1 className="heading">Hello, {user}!</h1>
        <Button label="button 1" message="Hello from button 1!" style="success"/>
        <Button label="button 2" message="Hello from button 2!" style="danger"/>
        <Button label="button 3" message="Hello from button 3!" style="neutral"/>
      </div>
    </>
  )
}

export default App
