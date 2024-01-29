
import { client } from "../../sanity/lib/client";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BlogCard } from "@/types";

export const revalidate = 60;


const BlogPosts = async () => {
  const query = `
  *[_type == "blog"] | order(_createdAt asc) {
    heading,
      body,
      image,
      "slug":slug.current
  }
  `;

  const blogs: BlogCard[] = await client.fetch(query);
  return blogs
}

export default async function Home() {
  const data:BlogCard[] = await BlogPosts();
  return (
    <main>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 m-6 gap-8">
        {data.map((post, idx) => (
          <Card key={idx} className="flex flex-col transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-102">
            <Image src={urlForImage(post.image)} alt="image" width={1000} height={1000} />
            <CardContent className="mt-2 flex-grow">
              <h3 className="text-xl font-semibold line-clamp-1">{post.heading}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3 ">{post.body}</p>
            </CardContent>
            <Button asChild className="w-full">
              <Link href={`/blog/${post.slug}`}>Read More</Link>
            </Button>
          </Card>
        ))}
      </div>
    </main>
  );
}
