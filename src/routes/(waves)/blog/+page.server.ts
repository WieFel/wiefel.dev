import blogArticles from '$lib/data/blog-articles';

export async function load() {
  return {
    articles: blogArticles
  };
}
