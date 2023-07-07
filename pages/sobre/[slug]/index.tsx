// regras : /sobre/qualquercoisa
// vai ser enviado para esse slug
import { useRouter } from 'next/router'
import { useEffect } from 'react';
const SobreItem = () =>{
    const router = useRouter();
    const {slug} = router.query;
    // const slug = router.query.slug

    useEffect(()=>{
        const handleRouteChange = (url:string)=>{
            console.log(`Indo para ${url}`)
        };
        router.events.on('routeChangeComplete', handleRouteChange);

        return () =>{
            router.events.off('routeChangeComplete', handleRouteChange);
        }    
    },[])

    return(
        <div>
            <h1>Página de {slug}</h1>

            <p>Pathname: {router.pathname}</p>
            <p>isFalback: {router.isFallback.toString()}</p>

            <button onClick={()=>{
                router.push({
                    pathname: '/sobre/[slug]',
                    query: { slug: 'pedro' }
                })
            }}>Ir para pagina de Pedro </button>
        </div>
    );
}
export default SobreItem;