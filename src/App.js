import './App.css';
import {useState} from "react";
import Table from "./components/table/table";
import Form from './components/form/form'
const usersList = [{
    id:1,FirstName: 'soheil', LastName:"ghadimi", Job: "developer",
}]

function App() {
    const [users, setUsers] = useState(usersList)
    const [user, setUser] = useState({ FirstName: '',LastName:"",  Job: ""})
    const [mood, setMood] = useState("Create")

  return (
    <div className="App">
      <Table users={users} setUsers={setUsers} user={user} setUser={setUser} mood={mood} setMood={setMood}/>
      <Form users={users} setUsers={setUsers} user={user} setUser={setUser} mood={mood} setMood={setMood}/>
    </div>
  );
}

export default App;
