import React from 'react';

interface Article {
  title: string;
  url: string;
  preview: string;
  date: string; // Added date property
}

interface ArticleCarouselProps {
  articles: Article[];
}

const ArticleCarousel: React.FC<ArticleCarouselProps> = ({ articles }) => {
  return (
    <div className="flex overflow-x-auto space-x-4 pb-4">
      {articles.map((article, index) => (
        <div key={index} className="flex-none w-64 bg-black shadow-md rounded-lg p-4 transition-shadow duration-300 hover:shadow-lg">
          <h3 className="font-bold mb-2">{article.title}</h3>
          <p className="text-xs text-gray-500 mb-2">{article.date}</p> {/* Added date display */}
          {/* <p className="text-sm mb-4">{article.preview}</p> */}
          <a 
            href={article.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:underline"
          >
            Read more
          </a>
        </div>
      ))}
    </div>
  );
};

export default ArticleCarousel;
