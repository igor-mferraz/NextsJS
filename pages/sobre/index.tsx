import { useState } from "react";
import Head from "next/head";
import { Layout } from "@/Layout";
import Link from "next/link";
import { MyButton } from "@/components/MyButton";
import styles from '../../styles/Sobre.module.css'
const Sobre = () =>{
    const [contador,setContador] = useState(10);
    return(
        <Layout>
            <div>
                <Head>
                    <title>Sobre</title>
                </Head>

                <h1 className={styles.sobreTitle}>Pagina Sobre!</h1>
                Meu nome é {process.env.NEXT_PUBLIC_NOME}
                <p>({contador})</p>
                <ul className="lista">
                    <li>
                        <Link href="/sobre/igor" scroll={false}>
                            IGOR
                        </Link>
                    </li>
                    <li><a href="/sobre/joao">joao</a></li>
                </ul>

                <MyButton
                    label = 'Diminuir'
                    onClick={()=>setContador(contador -1 )}
                />
                <button onClick={()=>setContador(contador + 1)} className="btn btn-primary">Aumentar</button>

                <style jsx>{`
                    .lista {
                        border:2px solid red;
                    }
                    .lista li {
                        font-size: 24px;
                    }
                
                `}

                </style>

            </div>
        </Layout>
    )
} 
export default Sobre;




//obs: fastrefresh 
// para resetar ao estado inicial deve-se atualizar a pagina completa, pq o fast refresh muda somente o que foi mudado, preservando o estado inicial 


//variaveis de ambiente caso não seja com o prefixo public não é possivel jogar diretamente no front, mas se for pelo servidor SSR consegue sem ser puclib