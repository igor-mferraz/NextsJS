import { Layout } from "@/Layout";
import Head from "next/head";
import hanglosse from "../public/images.jpg"
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Home</title>
          <meta name="title" content="Meu site em next!"/>
          <meta name="description" content="Descrição sobre o meu site!"/>
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://metatags.io/"/>
          <meta property="og:title" content="Meu site em next!"/>
          <meta property="og:description" content="Descrição sobre o meu site!"/>
          <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>
          <meta property="twitter:card" content="summary_large_image"/>
          <meta property="twitter:url" content="https://metatags.io/"/>
          <meta property="twitter:title" content="Meu site em next!"/>
          <meta property="twitter:description" content="Descrição sobre o meu site!"/>
          <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>
        </Head>
      
          <h1>Pagina Home</h1>
          <Image
            src={hanglosse}
            alt="joia"
            width={50}
            height={50}
          />
      </div>
    </Layout>
  );
}
