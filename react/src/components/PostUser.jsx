import axios from "axios";
import { useState } from "react";

const PostUser = () => {
    const [user, setUser] = useState({
        name: '', 
        age: '', 
        email: '',
    });

    const createUser = async () => {
        await axios.post("http://localhost:8080/api/form", user, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then((response) => {
            setUser({ name: '', age: '', email: '' });
            console.log(response);
            alert("User Created: " + JSON.stringify(response.data, null, 4));
        })
        .catch((err) => {
            alert(err);
        });
    };

    const onChangeForm = (e) => {
        if (e.target.name === 'name') {
            setUser({ ...user, name: e.target.value });
        } else if (e.target.name === 'age') {
            setUser({ ...user, age: e.target.value });
        } else if (e.target.name === 'email') {
            setUser({ ...user, email: e.target.value });
        }
    };

    return (
        <div>
            <h1>Create User</h1>
            <form>
                <div>
                    <div>
                        <label>Name</label>
                        <input 
                            type="text" 
                            value={user.name} 
                            onChange={onChangeForm} 
                            name="name" 
                            id="name" 
                            placeholder="Name" 
                        />
                    </div>
                    <br />
                    <div>
                        <label>Age</label>
                        <input 
                            type="text" 
                            value={user.age} 
                            onChange={onChangeForm} 
                            name="age" 
                            id="age" 
                            placeholder="Age" 
                        />
                    </div>
                    <br />
                    <div>
                        <label>Email</label>
                        <input 
                            type="text" 
                            value={user.email} 
                            onChange={onChangeForm} 
                            name="email" 
                            id="email" 
                            placeholder="Email" 
                        />
                    </div>
                    <br />
                </div>
                <button type="button" onClick={createUser}>Create</button>
            </form>
        </div>
    );
};

export default PostUser;
