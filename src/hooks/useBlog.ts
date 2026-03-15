import { useState, useEffect } from 'react';
import { getBlogs, getBlog } from '../lib/microcms';
import type { Blog } from '../types/blog';

export const useBlogs = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getBlogs()
            .then(({ contents }) => setBlogs(contents))
            .finally(() => setLoading(false));
    }, []);

    return { blogs, loading };
};

export const useBlog = (id: string | undefined) => {
    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;
        getBlog(id)
            .then(setBlog)
            .finally(() => setLoading(false));
    }, [id]);

    return { blog, loading };
};