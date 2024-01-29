// Define the schema for blog
import { defineType } from 'sanity';

const blog = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'heading',
      type: 'string'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options:{
        source: 'heading'
      }
    },
    {
      name: 'image',
      type: 'image'
    },
    {
      name: 'body',
      type: 'text'
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of:[
        {type: 'block'},
      ]
    }
  ],
});

export default blog;
