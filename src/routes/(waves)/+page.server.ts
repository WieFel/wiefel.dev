import projects from '$lib/data/projects';
import workExperience, { yearsOfExperience } from '$lib/data/work-experience';
import blogArticles from '$lib/data/blog-articles';

export async function load() {
  const articles = blogArticles.slice(0, 4);

  return {
    projects,
    blogArticles: articles,
    yearsOfExperience,
    workExperience,
  };
}
