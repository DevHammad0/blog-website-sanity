// Define the schema for blog
import { defineType } from 'sanity';

const blog = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    { name: 'heading', type: 'string' },
    { name: 'image', type: 'image' },
    { name: 'body', type: 'text' },
  ],
});

export default blog;
