import { Layout } from '@/Layout'
import { PostType } from '../../types/PostType'
type Props = {
    name:string
    posts: PostType[]
}

const Blog = ({ name, posts}: Props) =>{
    return(
        <Layout>
            <div>
                <h1>Blog de {name}</h1>
                <div>
                    {posts.map((post,index)=>(
                        <div key={index}>
                            <li> <a href={`/blog/${post.id}`}>{post.title}</a> </li>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

//agrupamento de dados é feito no getStaticProps e guardado em cache
export const getStaticProps = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: PostType[] = await res.json();

    return {
        props: {
            name:'Igor',
            posts: posts
        },
        revalidate: 7200 //tempo em segundos para recarregar automaticamente, caso haja alguma mudança 
    }
}

export default Blog