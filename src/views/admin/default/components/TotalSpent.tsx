import React, { useEffect, useState } from 'react';
import Card from "../../../../components/card";
import axios from 'axios';

interface MediumPost {
  guid: string;
  title: string;
  pubDate: string;
  description: string;
  link: string;
  author: string;
  thumbnail: string;
}

const TotalSpent = () => {
  const [mediumPosts, setMediumPosts] = useState<MediumPost[]>([]);

  useEffect(() => {
    const mediumFeedEndpoint = 'https://api.rss2json.com/v1/api.json?rss_url=https://trcnews.medium.com/feed';

    axios.get(mediumFeedEndpoint)
      .then((response) => {
        setMediumPosts(response.data.items);
      })
      .catch((error) => {
        console.error('Error fetching Medium blog data:', error);
      });
  }, []);

  return (
    <Card extra={"p-4"}>
      <div className="mb-8 w-full">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">Tokenized Latest News & Offers</h4>
        <p className="mt-2 text-base text-gray-600">Here you can find more details about your projects. Keep your users engaged by providing meaningful information.</p>
      </div>

      <div className="carousel w-full relative">
        {mediumPosts.length > 0 && (
          <>
            {mediumPosts.map((post, index) => (
              <div
                key={post.guid}
                id={`slide${index}`}
                className={`carousel-item relative w-full rounded-lg ${index === 0 ? 'visible' : ''}`}
              >
                <img src={post.thumbnail} alt={post.title} className="w-full rounded-lg" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  {index > 0 && <a href={`#slide${index - 1}`} className="btn btn-circle">❮</a>}
                  {index < mediumPosts.length - 1 && <a href={`#slide${index + 1}`} className="btn btn-circle">❯</a>}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </Card>
  );
};

export default TotalSpent;
