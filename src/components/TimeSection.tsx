import * as React from 'react';
import { format } from 'date-fns';
import ButtonLink from './links/ButtonLink';

type TimeSectionProps = {
  dateTime: string | undefined;
  title: string;
  description: string;
};

export default function TimeSection({
  dateTime,
  title,
  description,
}: TimeSectionProps) {
  const cleanDate = dateTime && format(new Date(dateTime), 'kk:mm:ss O');

  return (
    <section className='bg-dark'>
      <div className='layout text-white flex justify-center min-h-screen flex-col items-center'>
        <h1>{title}</h1>
        <p className='text-gray-300 mt-2'>{description}</p>
        <h2 className='text-5xl md:text-6xl mt-8 text-primary-400'>
          {cleanDate ? cleanDate : 'LOADING...'}
        </h2>
        <ButtonLink className='mt-8' href='/'>
          Back to Home
        </ButtonLink>
      </div>
    </section>
  );
}
