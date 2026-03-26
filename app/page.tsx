import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex flex-col items-center justify-center w-full py-32 px-6 text-center">
        <h1 className="text-4xl font-bold text-black dark:text-white tracking-tight">
          Equitotal Services
        </h1>

        <p className="mt-4 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
          Pensé pour vos chevaux, créé pour vous.
        </p>

        <div className="mt-10">
          <a
            href="#services"
            className="px-8 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium hover:opacity-80 transition"
          >
            Nos services
          </a>
        </div>
      </main>
    </div>
  );
}
