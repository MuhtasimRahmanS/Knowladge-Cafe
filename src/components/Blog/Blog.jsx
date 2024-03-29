import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";
const Blog = ({blog, handleAddToBookmark}) => {
    const {title, cover, reading_time, author_img, posted_date, author_name, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8 rounded-xl' src={cover} alt="" />
            <div className='flex justify-between mb-6'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author_name}</h3>
                        <p>{posted_date}</p>
                    </div>
                    
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={handleAddToBookmark} className='ml-2 text-2xl'><FaRegBookmark /></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a>{hash}</a></span>)
                }
            </p>
        </div>
    );
};
Blog.PropTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;