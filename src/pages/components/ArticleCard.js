// components/ArticleCard.jsx
import Image from "next/image";
import Link from "next/link";

const ArticleCard = ({ article }) => {
  return (
    <Link href={`/articles/${article.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer h-full">
        <div className="relative w-full h-48">
          <Image
            src={article.image}
            alt={article.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800 mb-2">{article.title}</h3>
          <p className="text-gray-600 line-clamp-3">{article.excerpt}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;