import { computed } from '@preact/signals-react';
import BlogAuthor from './blog-author';
import BlogContent from './blog-content';
import BlogImage from './blog-image';
import BlogTitle from './blog-title';
import { BlogsProps } from './types';
import { settingSignal } from '../../globals/signal/signal-store';

const Blog = ({ index, content,blogId ,selectBlog }: BlogsProps) => {
    const {author, date, title, summary} = content
    const  currentDirection = computed(() => settingSignal.value.direction);
    const checkBlogOrder = () => {
        if (index % 2 === 0) {
            return (
                <>
                    <BlogAuthor author={author} date={date}  />
                    <BlogTitle title={title} />
                    <BlogContent summary={summary} />
                    <BlogImage />
                </>
            );
        }
        return (
            <>
                <BlogImage />
                <BlogAuthor author={author} date={date} />
                <BlogTitle title={title} />
                <BlogContent summary={summary} />
            </>
        );
    };
    return <div onClick={() => selectBlog(blogId)} className="flex hover:cursor-pointer flex-col  mx-8" dir={currentDirection.value}>{checkBlogOrder()}</div>;
};

export default Blog;
