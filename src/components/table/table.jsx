import './table.style.css'
import Button from "../button/button";


const Table = ({users, setUsers, setUser, setMood}) => {

    const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id))
    }

    return (
        <div className={"container"}>
            <table>
                <thead>
                <tr>
                    <td>id</td>
                    <td>
                        FirstName
                    </td>
                    <td>
                        lastName
                    </td>
                    <td>
                        job
                    </td>
                </tr>
                </thead>

                <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.FirstName}</td>
                        <td>{user.LastName}</td>
                        <td>{user.Job}</td>
                        <Button onClick={() => handleDelete(user.id)}>delete</Button>
                        <button onClick={() => {
                            setUser(user);
                            setMood("Update")
                        }}>update
                        </button>
                    </tr>))}
                </tbody>
            </table>
        </div>
    )
}
export default Table;