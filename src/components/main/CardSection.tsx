import PreviewImage from './PreviewImage';

interface CardSectionProps {
  title: string;
  movieList: string[];
}

export default function CardSection({ title, movieList }: CardSectionProps) {
  return (
    <section className="w-full flex flex-col gap-[14px] my-[11px]">
      <p
        className={
          title === 'Previews'
            ? 'text-[26px] leading-[20px] px-4 font-[700]'
            : 'text-[20px] leading-[15px] px-4 font-[700]'
        }
      >
        {title}
      </p>
      <div className='overflow-x-scroll flex gap-[7px]'>
        {movieList.map((movie: any) => {
          return (
            <PreviewImage
              imageUrl={`https://image.tmdb.org/t/p/w1280${movie}`}
              square={title === 'Previews' ? false : true}
              key={movie.id}
            />
          );
        })}
      </div>
    </section>
  );
}