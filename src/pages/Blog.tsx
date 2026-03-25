import { Header } from "../components/Header";
import { useBlogs } from '../hooks/useBlog';
import { useNavigate } from 'react-router';
import styles from './Blog.module.css';
import { LoadingBar } from '../components/ProgressBar';
import dayjs from 'dayjs';


export function Blog() {
    const { blogs, loading } = useBlogs();
    const navigate = useNavigate();

    if (loading) return <LoadingBar />;

    return (
        <>
                    <div className={styles.background}>
            <Header />
            <section className={styles.container}>
                <div className={styles.grid}>
                    {blogs.map((blog) => (
                        <article
                            key={blog.id}
                            className={styles.card}
                            onClick={() => navigate(`/blog/${blog.id}`)}
                        >
                            {blog.eyecatch && (
                                <img className={styles.thumbnail} src={blog.eyecatch.url} alt={blog.title} />
                            )}
                            <div className={styles.cardBody}>
                                {blog.category && (
                                    <span className={styles.category}>
                                        {typeof blog.category === 'string' ? blog.category : blog.category.name}
                                    </span>
                                )}
                                <h2 className={styles.cardTitle}>{blog.title}</h2>
<time className={styles.date}>
    {dayjs(blog.publishedAt).format('YYYY/MM/DD')}
</time>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
            </div>
        </>
    );
}