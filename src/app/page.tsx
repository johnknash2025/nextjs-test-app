"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const imageUrls = ["/images/image1.jpg"];
  const { data: session } = useSession();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* サインイン/サインアウトエリア */}
        <div className="mb-8">
          {session ? (
            <div className="text-center">
              <p>
                Signed in as{" "}
                {session.user?.email || session.user?.name || "Unknown user"}
              </p>
              <button
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
                onClick={() => signOut()}
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="text-center">
              <p>You are not signed in</p>
              <button
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => signIn("github")}
              >
                Sign in with GitHub
              </button>
            </div>
          )}
        </div>

        {/* Next.js のデフォルトコンテンツ */}

        {/* カスタム画像セクション */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">My Custom Image</h2>
          {imageUrls.map((url, index) => (
            <div key={index} className="relative w-full pb-[56.25%] rounded shadow overflow-hidden">
              <Image
                src={url}
                alt={`Image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
