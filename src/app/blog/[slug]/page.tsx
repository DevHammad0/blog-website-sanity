
import { client } from "../../../../sanity/lib/client"
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { fullBlog } from "@/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const revalidate = 30;

const getData = async (slug: string) => {
    const query = `
    *[_type == "blog" && slug.current == "${slug}"]{
        "slug":slug.current,
          heading,
          content,
          image
      }[0]
    `

    const data = client.fetch(query);
    return data;
}



const BlogArticle = async ({ params }: { params: { slug: string } }) => {
    const data: fullBlog = await getData(params.slug);
    //  console.log(data)
    return (
        <div className="my-8 flex flex-col items-center mx-3">
            <h1>
                <span className="block mycolor text-sm font-semibold uppercase tracking-wide text-center"><Link href="/">Hammad - Blog</Link></span>
                <span className="mt-2 block text-3xl sm:text-4xl text-center font-bold leading-8 tracking-tight">{data.heading}</span>
            </h1>
            <Image src={urlForImage(data.image)} className="mt-10 border rounded-lg" priority alt="blog-image" width={650} height={650} />
            <div className="mt-16 text-justify prose prose-slate dark:prose-invert prose-li:marker:text-blue-600 prose-a:text-blue-600">
                <PortableText value={data.content} />
            </div>
        </div>
    )
}

export default BlogArticle



export const generateStaticParams = async () => {
    const query = `*[_type == "blog"] {
          "slug": slug.current,
      }`;

    const data: fullBlog[] = await client.fetch(query);

    return data.map((post) => ({
        slug: post.slug,
    }))
}