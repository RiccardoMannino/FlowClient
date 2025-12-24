import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center py-32 px-16 bg-white dark:bg-black ">
       <h1 className="font-semibold text-[clamp(2rem,4vw+1rem,6rem)]">FlowClient</h1>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h2 className="text-[clamp(1.5rem,4vw+1rem,2.5rem)] leading-10 tracking-tight text-black dark:text-zinc-50">
            Mini CRM per freelance.
          </h2>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-10">
         <Link
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-39.5"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
        
          Inizia Gratis
          </Link>
         <Link
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/08 px-5 transition-colors hover:border-transparent hover:bg-black/04 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-39.5"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
           Login
          </Link>
        </div>
      </main>
    </div>
  );
}
