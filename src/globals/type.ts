export type BlogData = {
    date: string;
    author: string;
    title: string;
    summary: string;
    blogName: string;
};
export type BlogItem = {
    blog: BlogData;
    lang: 'en' | 'he';
    blogId: number;
    uuid: string;
};
export type BlogLinkProps = {
    onclick: () => void;
};
