import { BlogData } from '../../globals/type';

export type BlogsProps = {
    index: number;
    content: BlogData;
    blogId: number;
    selectBlog: (id: number) => void;
};

export type BlogAuthorProps = {
    author: string;
    date: string;
};
export type BlogContentProps = {
    summary: string;
};
export type BlogTitleProps = {
    title: string;
};
