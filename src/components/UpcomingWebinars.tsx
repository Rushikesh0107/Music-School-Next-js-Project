'use client'

import { link } from "fs";
import { HoverEffect } from "./ui/card-hover-effect";

const featuredWebinars = [
    {
      title: 'Understanding Music Theory',
      description:
        'Dive deep into the fundamentals of music theory and enhance your musical skills.',
      link: 'understanding-music-theory',
      isFeatured: true,
    },
    {
      title: 'The Art of Songwriting',
      description:
        'Learn the craft of songwriting from experienced musicians and songwriters.',
      link: 'the-art-of-songwriting',
      isFeatured: true,
    },
    {
      title: 'Mastering Your Instrument',
      description:
        'Advanced techniques to master your musical instrument of choice.',
      link: 'mastering-your-instrument',
      isFeatured: true,
    },
    {
      title: 'Music Production Essentials',
      description:
        'Get started with music production with this comprehensive overview.',
      link: 'music-production-essentials',
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: 'Live Performance Techniques',
      description:
        'Enhance your live performance skills with expert tips and strategies.',
      link: 'live-performance-techniques',
      isFeatured: true,
    },
    {
      title: 'Digital Music Marketing',
      description:
        'Learn how to promote your music effectively in the digital age.',
      link: 'digital-music-marketing',
      isFeatured: true,
    },
  ];

function UpcomingWebinars() {
  return (
    <div>
      <h1
      className="text-2xl mt-10 font-bold text-sky-400 text-center mb-8 z-10"
      >
        Featured Webinars
      </h1>
      <p
      className="w-full text-center text-white font-bold mb-8 z-10 text-4xl"
      >
        Enhance your musical Journey
      </p>

      <div
      className="flex justify-center mx-auto w-[80%] overflow-hidden px-4 sm:px-6 lg:px-8"
      >
        <HoverEffect items={featuredWebinars} />
      </div>

      <div
      className="w-full justify-center flex"
      >
        <button
        className="w-40 font-semibold mb-10 bg-white text-black py-2 px-2 rounded-md"
        onClick={() => window.location.href = '/webinars'}
        >
            View All Webinars
        </button>
      </div>
    </div>
  );
}

export default UpcomingWebinars;