import { ProductCategory } from '@/redux/features/category/service/ProductCategory';
import { categoryLgContent } from '../../mock/category-lg';
import SectionTitle from '../UI/SectionTitle';
import CategoryLgBox from './CategoryLgBox';
import CategorySmBox from './CategorySmBox';

const Category = ({ categories }: any) => {
  return (
    <div className="flex flex-col items-center my-4 md:my-8">
      <SectionTitle title={'CategoryOfGoods'} />

      {/* 📱 sm and md break point */}
      <div className="flex flex-wrap justify-around items-center lg:hidden">
        {categories.map((categoryItem: ProductCategory) => {
          return (
            <CategorySmBox
              color={categoryItem.color}
              image={categoryItem.image}
              categoryName={categoryItem.categoryName}
              slug={categoryItem.slug}
              key={categoryItem.categoryName}
            />
          );
        })}
      </div>

      {/* 💻lg break point */}
      <div className="hidden lg:grid  gap-4 grid-rows-9 grid-cols-2 md:grid-cols-9 w-full xl:max-w-[2100px] mx-auto">
        {categoryLgContent.map(
          ({
            name,
            title,
            description,
            styles,
            href,
            imgSrc,
            imgWidth,
            imgHeight,
          }) => {
            return (
              <CategoryLgBox
                key={name}
                name={name}
                title={title}
                description={description}
                styles={styles}
                href={href}
                imgSrc={imgSrc}
                imgWidth={imgWidth}
                imgHeight={imgHeight}
              />
            );
          },
        )}
      </div>
    </div>
  );
};

export default Category;
