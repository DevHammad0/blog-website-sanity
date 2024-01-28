"use client"
import { Image as snImage } from "sanity";
import { client } from "../../sanity/lib/client";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

export const revalidate = 60;

type BlogType = {
  _id: string,
  _type: string,
  _createdAt: string,
  heading: string,
  body: string,
  image: snImage
}

const BlogPosts = async () => {
  const query = `*[_type == "blog"]{
    _id,
    _type,
    _createdAt,
    heading,
    body,
    image,
  }`;

  const blogs:BlogType[] = await client.fetch(query);
  return blogs
}

export default async function Home() {
  const data = await BlogPosts();
  return (
    <main>
      <Navbar/>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 m-6 gap-8">
        {data.map((post:BlogType) => (
          <Card key={post._id} className="flex flex-col transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-102">
            <Image src={urlForImage(post.image)} alt="image" className="" width={1000} height={1000} />
            <CardTitle className="ml-1 mt-2">{post.heading}</CardTitle>
            <CardContent className="mt-2 text-justify flex-grow">{post.body}</CardContent>
            <Button className="w-full">Read More</Button>
          </Card>
        ))}
      </div>
    </main>
  );
}
