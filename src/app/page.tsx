import Link from "next/link";
import { Intro } from "@/app/_components/intro";
import { getAllPosts } from "@/lib/api";
import { PostList } from "@/app/_components/post-list";

export default function Index() {
  const postList = getAllPosts();

  return (
    <>
      <Intro />
      <section className="max-w-892">
        <h5 className="font-bold text-heading-5 pb-2 mb-6 border-b border-black">Recently</h5>
        {postList.length > 0 && <PostList posts={postList} />}
        <p className="text-right font-bold"><Link href="/posts">See All Posts→</Link></p>
      </section>
    </>
  );
}
