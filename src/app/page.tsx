import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";
import { PostHeading } from "@/components/PostHeading";
import { PostCoverImage } from "@/components/PostCoverImage";

export default async function HomePage() {
  return (
    <Container>
      <Header />
      <section className="grid grid-cols-1 gap-8 mb-14 sm:grid-cols-2 group">
        <PostCoverImage
          linkProps={{
            href: `/`,
          }}
          imageProps={{
            src: "/images/solar_system.png",
            width: 1200,
            height: 720,
            priority: true,
            alt: "Solar System",
          }}
        />
        <div className="flex flex-col sm:justify-center">
          <time dateTime="2025-08-08" className="text-slate-600 text-sm">
            08/08/2025 17:40
          </time>
          <PostHeading url="#" as="h1">
            Sistema Solar
          </PostHeading>
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
