import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    console.log('blogs is :',blogs)
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>loading...</div>}
            {blogs && <BlogList blogs={blogs} title='All blogs' name='kiya' />}
        </div>
    );
}
export default Home;