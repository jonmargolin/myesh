import { Text } from '@chakra-ui/react'
import { BlogContentProps } from './types';
const BlogContent = ({summary}:BlogContentProps) => {
    return (
        <div>
           <Text overflow={"hidden"} whiteSpace={"pre-wrap"}  textOverflow={"ellipsis"} maxHeight={"65px"} fontSize='sm'>
            {summary}
            .</Text> 
        </div>
    );
};

export default BlogContent;<Text fontSize='sm'>(sm) In love with React & Next</Text>