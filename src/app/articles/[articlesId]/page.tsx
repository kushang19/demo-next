// =================  SERVER COMPONENT =====================

// import Link from "next/link";

// export default async function NewsArticle({
//   params,
//   searchParams,
// }: {
//   params: Promise<{ articlesId: string }>;
//   searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
// }) {
//     const {articlesId} = await params
//     const {lang='en'} = await searchParams
//   return (
//     <>
//       <h1>News Article - {articlesId}</h1>
//       <h2>Reading in - {lang}</h2>

//       <div>
//         <Link href={`/articles/${articlesId}?lang=en`}>English</Link>
//         <Link href={`/articles/${articlesId}?lang=es`}>Spainish</Link>
//         <Link href={`/articles/${articlesId}?lang=fr`}>French</Link>
//       </div>
//     </>
//   );
// }



// ======================  CLIENT COMPONENT =======================

"use client"
import Link from "next/link";
import { use } from "react";

export default function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articlesId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
    const {articlesId} =  use(params)
    const {lang='en'} =  use(searchParams)
  return (
    <>
      <h1>News Article - {articlesId}</h1>
      <h2>Reading in - {lang}</h2>

      <div>
        <Link href={`/articles/${articlesId}?lang=en`}>English</Link>
        <Link href={`/articles/${articlesId}?lang=es`}>Spainish</Link>
        <Link href={`/articles/${articlesId}?lang=fr`}>French</Link>
      </div>
    </>
  );
}
