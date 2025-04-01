import ChatWindow from '@/components/ChatWindow';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'P1-VisionTech',
  description: 'Chat con la web, chat con P1-VisionTech.',
  icons: {
    icon: '/favicon.ico',
  },
};

const Home = () => {
  return (
    <div>
      <Suspense>
        <ChatWindow />
      </Suspense>
    </div>
  );
};

export default Home;
