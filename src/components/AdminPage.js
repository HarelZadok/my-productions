import {useState} from "react";

export default function AdminPage() {
    const [connected, setConnected] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        if (username === "mose" && password === "Moreno098!") {
            setConnected(true);
        }
        else {
            alert("Wrong username or password");
        }
    }

    if (!connected) {
        return <div>
            <h1>Admin Page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="username"/>
                </label>
                <label>
                    Password:
                    <input type="password" name="password"/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    }
    return <div>
        <h1>Admin Page</h1>
        <p>Connected</p>
    </div>
}
