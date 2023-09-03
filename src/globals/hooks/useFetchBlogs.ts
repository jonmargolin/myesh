import { useQuery } from 'react-query';
import { getAllBlogs } from '../api/api';
import { useState } from 'react';
import { BlogItem } from '../type';

export const useBlogList = () => {
const [blogList, setBloglist ] =  useState<BlogItem[]>()
const { isLoading, isError } = useQuery({
    queryKey: ['blogs'],
    queryFn:getAllBlogs ,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    onSuccess: (data) => {
        setBloglist(data)
    }
});
return { blogList, isLoading, isError };
};
