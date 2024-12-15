import { PageLayout } from '@/components/common/page-layout';

import data from '@/fixtures/posts.json';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = data.find((item) => item.id === +slug);

  return (
    <PageLayout title={post?.title} description={`By ${post?.author}`}>
      <div>{post?.content}</div>
    </PageLayout>
  );
}
