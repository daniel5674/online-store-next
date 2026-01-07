import Link from 'next/link';

type CategoryCardProps = {
  name: string;
  image: string;
};

const CategoryCard = ({ name, image }: CategoryCardProps) => {
  const label = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <Link href={`/category/${name}`} className="block text-center">
      <div className="bg-white shadow rounded-lg overflow-hidden p-4 hover:shadow-lg transition">
        <img
          src={image}
          alt={name}
          className="w-28 h-16 object-contain mx-auto mb-2"
        />
        <h3 className="text-lg font-semibold text-gray-700">
          {label}
        </h3>
      </div>
    </Link>
  );
};

export default CategoryCard;