import projects from '$lib/data/projects';
import blogArticles from '$lib/data/blog-articles';

export async function load() {
  const articles = blogArticles.slice(0, 4);

  return {
    projects,
    blogArticles: articles,
  };
}
