import { Image as snImage } from "sanity";

export type BlogCard = {
    heading: string,
    slug: string,
    body: string,
    image: snImage
  }

  export type fullBlog = {
    slug: string,
    heading: string,
    content: any,
    image: snImage     
  }