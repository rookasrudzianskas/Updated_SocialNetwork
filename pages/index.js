import Head from 'next/head'
import Header from "../components/Header";
import Feed from "../components/Feed";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Instagram 🔥</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    {/*        done*/}

    {/*  Header */}
        <Header />
    {/*  Feed   */}
        <Feed />
    {/*  Modal   */}

    </div>
  )
}
