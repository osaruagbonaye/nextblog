import { getSlugs, getPost } from "../../data/posts";
import styles from '../../styles/Home.module.css';

export default function BlogPost(props) {
    const { post } = props;
    return (
        <div className={styles.container}>
            <div className={styles.card}>
            <h1>{post.title}</h1>
            <img className={styles.image} src={post.image} alt={post.slug}/>
            <span>{post.author} | </span>
            <span>{post.publishedDate}</span>
            <p>{post.body}</p>
        </div>
        </div>
    );
}

export const getStaticProps = async ({ params }) => {
    const post = getPost(params.slug);
    return {
        props: {
            post
        }
    }
};

export const getStaticPaths = async () => {
    const paths = getSlugs();
    return {
        paths,
        fallback: false
    }
};