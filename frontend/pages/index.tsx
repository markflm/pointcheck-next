import { NextPage } from 'next';
import Head from 'next/head';
import ArticleList from '../components/ArticleList';
import { Article } from '../interfaces/fake/Article';

//getServerSideProps = fetch on every request
//getStaticPaths

//getStaticProps = fetch at build time
export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles: Article[] = await res.json();

  //can return whatever here, but I think it needs to be in the format of an object with the key "props"
  return {
    props: {
      articles
    }
  };
};

//not really necessary, just trying to figure out how to type stuff
interface ArticleProps {
  articles: Article[];
}

const Home: NextPage<ArticleProps> = (props) => {
  const articles = props.articles;
  return (
    <div>
      <Head>
        <title>pointcheck.gg</title>
        {/* SEO stuff */}
        <meta name="description" content="Generated by create next app" />{' '}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <span className="font-bold font-xl">pointcheck.gg!</span>
        </h1>
        <ArticleList articles={articles} />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
