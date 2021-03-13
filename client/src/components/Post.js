
const Post = (props) => {
    return (
        <div className="col-md-12">
            <div>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <hr />
            </div>
        </div>
    );
}

export default Post;