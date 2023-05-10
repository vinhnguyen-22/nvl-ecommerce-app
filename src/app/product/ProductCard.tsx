'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { producttest } from '../page';
import HeartButton from '../../components/HeartButton';
import Button from '../../components/Button';

export interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  sku: number;
  imageUrl: string;
  status: number;
  category: string;
  onAction?: (id: string) => void;
  disabled?: string;
  actionLabel?: string;
  actionId?: string;
}

export const data: ProductCardProps[] = [
  {
    id: 1,
    name: 'first',
    description: 'lorem ipsum',
    sku: 1,
    imageUrl: '/images/placeholder.png',
    status: 0,
    category: 'Bay',
  },

  {
    id: 2,
    name: 'second',
    description: 'lorem ipsum',
    sku: 3,
    imageUrl: '/images/placeholder.png',
    status: 1,
    category: 'Lac',
  },

  {
    id: 3,
    name: 'last',
    description: 'lorem ipsum',
    sku: 4,
    imageUrl: '/images/placeholder.png',
    status: 1,
    category: 'aaaaa',
  },
];

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  sku,
  imageUrl,
  status,
  category,
  onAction,
  disabled,
  actionLabel,
  actionId,
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push('/product/page')}
      className="
        col-span-1 cursor-pointer group bg-white px-3 py-3 shadow-lg rounded-lg mb-2
        "
    >
      <div className="flex flex-col gap-2 w-full ">
        <div
          className="
                aspect-square
                w-full
                relative
                overflow-hidden
                rounded-xl
                "
        >
          <Image
            height={300}
            width={200}
            alt="listing"
            src="/images/placeholder.png"
            className="
                        object-cover

                        group-hover:scale-110
                        transition
                        "
          />
          <div className="absolute top-3 right-3">
            <HeartButton listingId={''} />
          </div>
        </div>
        <div className="font-semibold" text-lg>
          name
        </div>
        <div className="font-light text-neutral-500">Category</div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">$ Price</div>
        </div>
        <div className="font-bold">
          <Button small label="Add to cart" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
