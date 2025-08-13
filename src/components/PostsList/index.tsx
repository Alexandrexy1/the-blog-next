import { postRepository } from "@/repositories/post";
import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export async function PostsList() {
  const posts = await postRepository.findAll();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => {
        return (
          <div className="flex flex-col group" key={post.id}>
            <PostCoverImage
              linkProps={{
                href: `/post/${post.slug}`,
              }}
              imageProps={{
                src: post.coverImageUrl,
                width: 1200,
                height: 720,
                alt: post.title,
              }}
            />
            <div className="flex flex-col sm:justify-center">
              <time
                dateTime={post.createdAt}
                className="text-slate-600 text-sm"
              >
                {post.createdAt}
              </time>
              <PostHeading url="#">{post.title}</PostHeading>
              <p>{post.excerpt}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
