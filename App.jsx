import './styles.css'
import Tabs from "./components/Tabs";

function App() {
  return (
    
      <Tabs>
      <h1>Hogwarts House members</h1>
      <div label="Gryffindor">
         <li>Harry Potter</li>
         <li>Ron Weasly</li>
         <li>Hermione Granger</li>
      </div>
      <div label="Ravenclaw">
         <li>Luna Lovegood</li>
         <li>Sybill Trelawney</li>
         <li>Marcus Belby</li>
      </div>
      <div label="Slytherin">
         <li>Luna Lovegood</li>
         <li>Sybill Trelawney</li>
         <li>Marcus Belby</li>
      </div>
      <div label="Hufflepuff">
         <li>Bridget Wenlock</li>
         <li>Cedric Diggory</li>
         <li>Ernie Macmillan</li>
      </div>
      </Tabs>
    
  );
}

export default App;