import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Container>
      <Header />
      <section className="grid grid-cols-1 gap-8 mb-14 sm:grid-cols-2 group">
        <Link href="#" className="w-full h-full overflow-hidden rounded-xl">
          <Image
            className="w-full h-full object-cover object-center group-hover:scale-105 transition"
            src="/images/solar_system.png"
            width={1200}
            height={720}
            alt="titulo do post"
            priority
          />
        </Link>
        <div className="flex flex-col sm:justify-center">
          <time dateTime="2025-08-08" className="text-slate-600 text-sm">
            08/08/2025 17:40
          </time>
          <h1 className="font-extrabold text-2xl/tight mb-4 sm:text-4xl">
            <Link href="#">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </Link>
          </h1>
          <p>
            Ratione et nam rem perferendis repellendus numquam vero accusantium
            voluptate voluptatum iste ab laborum assumenda reiciendis molestias
            velit, quae ullam, eos aliquam.
          </p>
        </div>
      </section>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer>
        <p>Footer do blog</p>
      </footer>
    </Container>
  );
}
