export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const name = (searchParams.name as string) || "World";

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-300 flex items-center print:p-0">
      <div className="max-w-xl mx-auto p-20 bg-white rounded-lg text-center">
        <p className="text-6xl mb-8">😉</p>
        <h1 className="text-6xl font-bold mb-8">Hello, {name}!</h1>
        <p className="text-xl">
          This is a simple PDF template.
          <br />
          You can use it to generate PDFs.
        </p>
      </div>
    </div>
  );
}
