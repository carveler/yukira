// components/SocialMediaFeeds.tsx

import React from 'react';
import Embed from 'react-embed';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { InstagramEmbed } from 'react-social-media-embed';
import YouTube from 'react-youtube';

const SocialMediaFeeds: React.FC = () => {
  const youtubeVideoOptions = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      playsinline: 1,
    },
  };

  return (
    <div className='container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8'>
      {/* Twitter Feed */}
      <div className='twitter-feed'>
        <h2 className='text-xl font-semibold mb-4'>Twitter Feed</h2>
        {/* Integrate Twitter API here */}
        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='yukirachandayo'
          options={{ height: 700, width: 400 }}
        />
      </div>

      {/* Instagram Feed */}
      <div className='instagram-feed'>
        <h2 className='text-xl font-semibold mb-4'>Instagram Feed</h2>
        <InstagramEmbed
          url='https://www.instagram.com/p/CmEOnFRsWUZ/'
          maxWidth={400}
          hideCaption={false}
          containerTagName='div'
          protocol=''
          injectScript
        />
      </div>

      {/* YouTube Feed */}
      <div className='youtube-feed'>
        <h2 className='text-xl font-semibold mb-4'>YouTube Feed</h2>
        <div
          className='relative overflow-hidden'
          style={{ paddingTop: '56.25%' /* 16:9 aspect ratio */ }}
        >
          <YouTube
            videoId='UH7fh8YtYBw'
            opts={youtubeVideoOptions}
            className='absolute top-0 left-0 w-full h-full'
          />
        </div>
      </div>
    </div>
  );
};

export default SocialMediaFeeds;
