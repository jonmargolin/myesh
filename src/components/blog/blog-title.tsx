import { Text } from '@chakra-ui/react';
import { BlogTitleProps } from './types';

const BlogTitle = ({ title }: BlogTitleProps) => {
    return (
        <div>
            <Text fontFamily={'ploni'} fontSize="xl">
                {title}
            </Text>
        </div>
    );
};

export default BlogTitle;
