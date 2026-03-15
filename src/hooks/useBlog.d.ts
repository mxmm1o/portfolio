import type { Blog } from '../types/blog';
export declare const useBlogs: () => {
    blogs: Blog[];
    loading: boolean;
};
export declare const useBlog: (id: string | undefined) => {
    blog: Blog | null;
    loading: boolean;
};
