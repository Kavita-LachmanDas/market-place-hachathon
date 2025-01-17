'use client';

import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client'; // Ensure this client is set up correctly
import Link from 'next/link';

const ViewAllPostsLink = () => {
  const [viewAllPost, setViewAllPost] = useState<{ text: string; url: string } | null>(null);

  useEffect(() => {
    const fetchLinkData = async () => {
      try {
        const query = `*[_type == "viewAllPosts"][0] {
          text,
          url
        }`;

        const data = await client.fetch(query);
        setViewAllPost(data);
        console.log('Fetched View All Posts Data:', data); // Debugging
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchLinkData();
  }, []);

  if (!viewAllPost) {
    return <p>Loading...</p>; // Show loading text while data is being fetched
  }

  return (
    <Link href={viewAllPost.url} className="underline text-center font-bold mt-4 block">
      {viewAllPost.text || 'View All Posts'}
    </Link>
  );
};

export default ViewAllPostsLink;
