import { ParsedUrlQuery } from "querystring";
import { PostType } from "../../types/PostType";
import { GetStaticProps } from 'next'
import Head from "next/head";
type Props = {
    post: PostType
}

const BlogItem = ({post}: Props) => {
    return(
        <div>
            <Head>
                <meta name="title" content={post.title}/>
                <meta name="description" content={post.body}/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://metatags.io/"/>
                <meta property="og:title" content={post.title}/>
                <meta property="og:description" content={post.body}/>
                <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://metatags.io/"/>
                <meta property="twitter:title" content={post.title}/>
                <meta property="twitter:description" content={post.body}/>
                <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>

            </Head>
            <h1>Blog</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
};
export default BlogItem;

//caminhos
export const getStaticPaths = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: PostType[] = await res.json();

    // paths será as listas o id clicado da api
    // params é um recurso do next
    const paths = posts.map((post) =>({
        params: {
            id: post.id.toString()
        }
    }));
    return { paths , fallback: false } //false = pagina não encontrada caso não tenha //'blocking' = tenta fazer a busca na lista
};

interface IParams extends ParsedUrlQuery {
    id: string
}

//
export const getStaticProps: GetStaticProps = async (context) =>{
    const { id } = context.params as IParams;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();
    return {
        props: {
            post
        }
    }
};