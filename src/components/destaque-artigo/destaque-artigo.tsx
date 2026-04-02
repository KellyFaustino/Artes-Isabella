import Image from "next/image";

type ArticleProps = {
  title: string;
  text: string[];
  tags: string[];
  image?: string;
};

const Article: React.FC<ArticleProps> = ({ title, text, tags, image }) => {
  return (
    <div className="bella-card">
      <h1 className="text-alura-200 mb-2 text-xl font-bold dark:text-gray-200">
        {title}
      </h1>

      <div className="mb-4 flex w-full justify-center gap-2 pr-5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-bella-100 px-4 py-1 text-xs font-bold uppercase text-gray-200 hover:scale-110 hover:bg-bella-200 dark:bg-dark-100"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-1">
        {text.map((content, index) => (
          <span key={index} className="text-alura-200 dark:text-gray-400">
            {content}
          </span>
        ))}
      </div>

      {image && (
        <div className="sm:p-4">
          <Image
            src={image}
            alt="Imagem do artigo"
            width={500}
            height={300}
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default Article;
