import Link from "next/link";
import { PropsWithChildren } from "react";

type PostHeadingProps = PropsWithChildren & {
  url: string;
  as?: "h1" | "h2";
};

export function PostHeading({
  children,
  url,
  as: PostHeader = "h2",
}: PostHeadingProps) {
  const headingClassesMap = {
    h1: "font-extrabold text-2xl/tight mb-4 sm:text-4xl",
    h2: "font-extrabold text-xl/tight mb-4 sm:text-2xl",
  };

  return (
    <PostHeader className={headingClassesMap[PostHeader]}>
      <Link href={url} className="hover:text-slate-700">
        {children}
      </Link>
    </PostHeader>
  );
}
