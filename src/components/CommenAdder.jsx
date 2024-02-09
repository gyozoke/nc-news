import { useState, useEffect, } from "react";
import { getUsers, postComment } from "../utils/api";
import { useParams } from "react-router-dom";



function CommentAdder (setComments) {
    const {id} = useParams();
    const [users, setUsers] = useState([]);
    const [addComment, setAddComment] = useState("");
    const [selectedUser, setSelectedUser] = useState("");


    useEffect(() => {
        getUsers()
        .then((response) => {
            setUsers(response.users)
        })
        .catch((err) => {
            console.log(err)
        })
    }, []);

    function handleAddComment(event) {
        setAddComment(event.target.value);
      }

      function handleUserChange(event) {
        setSelectedUser(event.target.value);
      }

    
      function handleSubmit(event) {
        event.preventDefault();
    
        postComment(id, selectedUser, addComment)
          .then((response) => {
            setComments((currentComments) => {
                return [response, ...currentComments]
            })
        })
        .catch((err) => {
            console.log(err)
        });
        setSelectedUser("");
        setAddComment("");
        }


    return (
        <main>
            <h2>Add a new Comment</h2>
            <section className="users">
                <form onSubmit={handleSubmit} className="newcommentform">
                    <label htmlFor="user">Select user:</label>
                    <select name="users" id="user" onChange={handleUserChange} value={selectedUser}>
                    <option value="" disabled>Select a user</option>
                    {users.map((user) => (
                    <option key={user.name} value={user.username}>
                        {user.username}
                    </option>
                    ))}
                    </select>
                    <label htmlFor="comment">Type your comment</label>
                    <input type="text" id="comment" required value={addComment} onChange={handleAddComment}  />
                    <button type="submit" className="itemsubmitbutton" value="Submit">Submit</button>
                </form>
            </section>
        </main>
    )
}

export default CommentAdder
