export const metadata = {
  title: "فروشگاه لوازم ورزشی فیت‌لند",
};

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p className="text-2xl font-bold">این یک متن تستی است</p>
        <p className="text-2xl font-medium">این یک متن تستی است</p>
        <p className="text-2xl font-regular">این یک متن تستی است</p>
        <p className="text-2xl font-light">این یک متن تستی است</p>
      </main>
    </div>
  );
}
