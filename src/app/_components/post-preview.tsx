import { type Author } from "@/interfaces/author";
import Link from "next/link";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage?: string;
  date: string;
  category: string,
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage = '',
  date,
  category,
  slug,
}: Props) {
  return (
    <article className="flex justify-between gap-x-8 pb-28 mb-28 border-b">
      <div>
        <h2 className="text-base font-semibold leading-relaxed max-w-584">
          <Link href={`/posts/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h2>
        <div className="flex italic font-midium mt-2">
          <DateFormatter dateString={date} />
          <p className="pl-4">{category}</p>
        </div>
      </div>
      <div className="max-w-276 max-h-155">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
    </article>
  );
}
