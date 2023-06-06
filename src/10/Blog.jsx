const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}   
];

function Blog(props) {
    const sidebar = (
        <ul>
            {posts.map((a) =>
            <li key = {a.id}>
                {a.title}
            </li>
            )}
        </ul>
    );

    const content = posts.map((a) =>
            <div key={a.id}>
                <h3>{a.title}</h3>
                <p>{a.content}</p>
            </div>
    );

    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    );    
}

export default Blog;