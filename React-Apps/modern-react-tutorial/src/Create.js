import { useState } from 'react';
// the useHistory hook is used for redirects....
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Eunjoo');
    // isPending used for dynamic text on form submit button...
    const [isPending, setIsPending] = useState(false);
    // first, to use the useHistory hook, you need to invoke the hook...
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        // how to make a post request in React...
        fetch('http://localhost:8080/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("new blog added...");
            setIsPending(false);
            // how to use the useHistory hook to redirect to a specific page...
            history.push('/')
        });
    }

    return (
        <div className="Create">
            <h2>Create a New Blog Post</h2>

            {/* how to submit a form in React... */}
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                {/* how to use forms in React... */}
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Blog Body</label>
                {/* how to use forms in React... */}
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <label>Blog Author: </label>
                {/* how to use forms in React... */}
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Eunjoo">Eunjoo</option>
                    <option value="Yun">Yun</option>
                </select>
                {!isPending && <button>Submit Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
}

export default Create;