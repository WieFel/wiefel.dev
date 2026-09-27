import projects from '$lib/data/projects';
import services from '$lib/data/services';
import blogArticles from '$lib/data/blog-articles';

export async function load() {
  const articles = blogArticles.slice(0, 4);

  return {
    services,
    projects,
    blogArticles: articles,
  };
}
