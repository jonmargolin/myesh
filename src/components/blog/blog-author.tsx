import { Text } from '@chakra-ui/react'
import { BlogAuthorProps } from './types';

const BlogAuthor = ({author,date}:BlogAuthorProps) => {
    return (
        <div className='flex pt-3 pb-3'>
             <Text fontFamily={'ploni'} as='b' className='pr-2' fontSize='md'>{date}</Text>
  <Text fontSize='sm'>{author}</Text>
        </div>
    );
};

export default BlogAuthor;