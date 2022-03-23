import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { getPosts } from '../data/posts';

export default function Home() {
  const posts = getPosts();
  return (
   <div className={styles.container}>
      <Head>
        <title>Super Rentals Blog</title>
      </Head>
      <div className="tile-wrapper">
        <h1 className="hl">Welcome to our blog!</h1>
        {posts.map(post => <BlogPostCard key={post.id} data={post} />)}
      </div>
    </div>
  );
}

const BlogPostCard = (props) => {
  const { data } = props;
  return (
    <div className={styles.card}>
      <img className={styles.image} src={data.image} alt={data.slug}/>
      <h2 className={styles.title}>{data.title}</h2>
      <span className={styles.smallFonts} >{data.author} | </span>
      <span className={styles.smallFonts}>{data.publishedDate}</span>
      <p>{data.excerpt}</p>
      <Link className="button primary" href={`/blog/${data.slug}`}><a>Read more</a></Link>
    </div>
  );
}