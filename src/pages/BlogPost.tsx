import { useParams, useNavigate } from 'react-router';
import { useBlog } from '../hooks/useBlog';
import { LoadingBar } from '../components/ProgressBar';
import { Header } from "../components/Header";
import styles from "./BlogPost.module.css";

export function BlogPost() {
    const { id } = useParams<{ id: string }>();
    const { blog, loading } = useBlog(id);
    const navigate = useNavigate();

    if (loading) return <LoadingBar />;
    if (!blog) return <p>記事が見つかりませんでした</p>;

    return (
        <>
            <div className={styles.background}>
                <Header />
                <article className={styles.container}>
                    <button className={styles.back} onClick={() => navigate('/blog')}>
                        ← BACK
                    </button>
                    {blog.eyecatch && (
                        <img className={styles.eyecatch} src={blog.eyecatch.url} alt={blog.title} />
                    )}
                    <div className={styles.header}>
                        {blog.category && (
                            <span className={styles.category}>
                                {typeof blog.category === 'string' ? blog.category : blog.category.name}
                            </span>
                        )}
                        <h1 className={styles.title}>{blog.title}</h1>
                        <time className={styles.date}>
                            {new Date(blog.publishedAt).toLocaleDateString('ja-JP')}
                        </time>
                    </div>
                    <div className={styles.body} dangerouslySetInnerHTML={{ __html: blog.content }} />
                </article>
            </div>
        </>
    );
}