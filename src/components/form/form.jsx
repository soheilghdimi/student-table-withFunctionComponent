import './form.style.css';
const makeUniqueId = () => {
    return parseInt(100 * Math.random())
}

const Form = ({users, setUsers, user, setUser, mood, setMood}) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        if (user.FirstName === "" || user.LastName === "" || user.Job === "") {
            alert("please fill the inputs")
        } else {
            if (mood === "Update") {
                setUsers(users.map(oldUser => user.id === oldUser.id ? user : oldUser))
            } else {
                setUsers([...users, {id: makeUniqueId(), ...user}])
            }
        }
        setUser({FirstName: '', LastName: "", Job: ""})
        setMood("Create")
    }

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="form">
                <div className="input-container ic2">
                    <input onChange={handleChange} id="FirstName" className="input" type="text" name={"FirstName"}
                           value={user.FirstName}/>
                    <div className="cut"/>
                    <label htmlFor={"FirstName"} className="placeholder">FirstName</label>
                </div>

                <div className="input-container ic2">
                    <input onChange={handleChange} id="LastName" className="input" type="text" name={"LastName"}
                           value={user.LastName}/>
                    <div className="cut"/>
                    <label htmlFor={"LastName"} className="placeholder">LastName</label>
                </div>

                <div className="input-container ic2">
                    <input onChange={handleChange} id="Job" className="input" type="text" name={"Job"}
                           value={user.Job}/>
                    <div className="cut cut-short"/>
                    <label htmlFor="Job" className="placeholder"> Job </label>
                </div>
                <input type="submit" className="submit" value={mood}/>
            </form>
        </div>
    )
}
export default Form;