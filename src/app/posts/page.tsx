import Link from 'next/link';

import { PageLayout } from '@/components/common/page-layout';
import { Badge } from '@/components/ui/badge';

import data from '@/fixtures/posts.json';

type Post = {
  readonly id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
};

export default async function Page() {
  const posts = data as Post[];

  return (
    <PageLayout title='View all posts'>
      {posts.map(({ id, title, category }) => (
        <div key={id} className='flex items-center space-x-2'>
          <Link href={`/posts/${id}`} className='hover:underline'>
            {title}
          </Link>
          <Badge label={category ?? 'Uncategorized'} />
        </div>
      ))}
    </PageLayout>
  );
}
