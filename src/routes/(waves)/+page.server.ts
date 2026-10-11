import projects from '$lib/data/projects';
import services from '$lib/data/services';
import conferences from '$lib/data/conferences';
import blogArticles from '$lib/data/blog-articles';

export async function load() {
  return {
    services,
    conferences,
    projects,
    blogArticles,
  };
}
