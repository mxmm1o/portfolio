import { useParams, useNavigate } from 'react-router';
import { useBlog } from '../hooks/useBlog';
import { LoadingBar } from '../components/ProgressBar';
import { Header } from "../components/Header";



export function BlogPost() {
    const { id } = useParams<{ id: string }>();
    const { blog, loading } = useBlog(id);
    const navigate = useNavigate();

    if (loading) return <LoadingBar />;
    if (!blog) return <p>記事が見つかりませんでした</p>;

    return (
        <>
            <Header />
            <article>
                <button onClick={() => navigate('/blog')}>← 一覧に戻る</button>
                {blog.eyecatch && (
                    <img src={blog.eyecatch.url} alt={blog.title} />
                )}
                <h1>{blog.title}</h1>
                <time>{new Date(blog.publishedAt).toLocaleDateString('ja-JP')}</time>
                <div className="blog-body" dangerouslySetInnerHTML={{ __html: blog.content }} />
            </article>
        </>
    );
}