const BlogList = (propssss) => {
    const blogs = propssss.blogs;
    const title = propssss.title;
    const name = propssss.name;

    return (
        <div className="blog-list">
            <h1>name is {name}</h1>
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id} >
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
export default BlogList;
