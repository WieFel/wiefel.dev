import projects from '$lib/data/projects';
import workExperience, { yearsOfExperience } from '$lib/data/work-experience';
import { filteredPosts } from '$lib/data/blog-posts';

export async function load() {
  const posts = filteredPosts.slice(0, 4);

  return {
    projects,
    posts,
    yearsOfExperience,
    workExperience,
  };
}
