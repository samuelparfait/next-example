type PageLayoutProps = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
};

export function PageLayout({ children, title, description }: PageLayoutProps) {
  return (
    <main className='container mx-auto'>
      <h1 className='text-4xl font-semibold mb-4'>{title}</h1>
      <p className='mb-4'>{description}</p>
      {children}
    </main>
  );
}
