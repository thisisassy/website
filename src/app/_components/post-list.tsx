import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function PostList({ posts }: Props) {
  return (
    <div>
      {
        posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            category={post.category}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))
      }
    </div>
  );
}
