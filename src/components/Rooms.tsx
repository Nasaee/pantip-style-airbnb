import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { rooms } from '../data';
import { Link } from 'react-router-dom';

const Rooms = () => {
  return (
    <div className='flex justify-center'>
      <Carousel
        opts={{
          align: 'center',
        }}
        className='w-full max-w-sm'
      >
        <CarouselContent>
          {rooms.map((room) => {
            const { id, title, path, icon: Icon } = room;
            return (
              <CarouselItem
                key={id}
                className='md:basis-1/2 lg:basis-1/3 flex-grow'
              >
                <Link
                  to={path}
                  className='flex flex-col items-center p-4  border '
                >
                  <Icon />
                  <p>{title}</p>
                </Link>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
export default Rooms;
<Carousel>
  <CarouselContent className='-ml-4'>
    <CarouselItem className='pl-4'>...</CarouselItem>
    <CarouselItem className='pl-4'>...</CarouselItem>
    <CarouselItem className='pl-4'>...</CarouselItem>
  </CarouselContent>
</Carousel>;
