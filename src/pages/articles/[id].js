// pages/articles/[id].js
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import articlesData from "./data/articles.json";
import Link from "next/link";

const ArticleDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const article = articlesData.find((art) => art.id === parseInt(id));

  if (!article) {
    return (
      <div className="container mx-auto py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">Artikel tidak ditemukan.</h1>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{article.title} | ABI GOLD</title>
      </Head>
      <div className="container mx-auto py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-xl md:text-xl font-extrabold text-green-950 mb-6">
            {article.title}
          </h1>
          <div className="relative w-full h-80 mb-8">
            <Image
              src={article.image}
              alt={article.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="prose max-w-none text-lg text-gray-700">
            {article.content.map((block, index) => {
              if (block.type === "paragraph") {
                return <p key={index}>{block.text}</p>;
              }
              if (block.type === "heading") {
                return (
                  <h2 key={index} className="text-3xl font-bold text-green-800 mt-8 mb-4">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "quote") {
                return (
                  <blockquote key={index} className="border-l-4 border-yellow-500 pl-4 italic text-gray-600 my-4">
                    <p>"{block.text}"</p>
                    {block.author && <footer className="mt-2 text-sm text-gray-500"> — {block.author}</footer>}
                  </blockquote>
                );
              }
              if (block.type === "list") {
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 my-4">
                    {block.items.map((item, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>
          <Link href="/" className="mt-8 inline-block text-green-700 hover:text-green-900 font-semibold">
            &larr; Kembali ke Beranda
          </Link>
        </div>
      </div>
    </>
  );
};

export default ArticleDetailPage;