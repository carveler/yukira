// import Link from 'next/link'
// import Layout from '../components/Layout'

// const AboutPage = () => (
//   <Layout title="About | Next.js + TypeScript Example">
//     <h1>About</h1>
//     <p>This is the about page</p>
//     <p>
//       <Link href="/">Go home</Link>
//     </p>
//   </Layout>
// )

// export default AboutPage

import React from 'react';

const About: React.FC = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-semibold mb-4'>About the Illustrator</h1>
      <p>
        {/* Add the Illustrator's background, experience, and achievements here */}
      </p>
    </div>
  );
};

export default About;
