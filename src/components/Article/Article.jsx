import Image from 'next/image'

const Article = ({ title, text, tags, image }) => {
  return (
    <div className="bella-card">
      <h1 className="mb-2 text-xl text-alura-200 dark:text-gray-200 font-bold">
        {title}
      </h1>
      <div className="w-full pr-5 flex gap-2 justify-center mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-4 py-1 bg-bella-100 dark:bg-dark-100 rounded-full text-gray-200 text-xs font-bold uppercase hover:bg-bella-200 hover:scale-110"
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
  )
}

export default Article
