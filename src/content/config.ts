// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
//const blogCollection = defineCollection({ /* ... */ });
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
//export const collections = {
//    'blog': blogCollection,
//};

 
const blogs = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        tags: z.array(z.string()),
        image: z.string().optional(),
    }).passthrough(),
});
const newsletters = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        categories: z.array(z.string()),
        summary: z.string(),
        author: z.string(),
        image: z.string().optional(),
    }).passthrough(),
});
const authors = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        tags: z.array(z.string()),
        image: z.string().optional(),
    }).passthrough(),
});
  
export const collections = {
    'blogs': blogs,
    'newsletters': newsletters,
    'authors': authors,
};
