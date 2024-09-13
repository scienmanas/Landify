import fs from "fs";
import matter from "gray-matter";

export function getBlogPostMetadata(basePath: string) {
  const folder = basePath + "/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get the file data
  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`${basePath}/${filename}`, "utf-8");
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      image: matterResult.data.image,
      publishDate: matterResult.data.publishDate,
      description: matterResult.data.description,
      tage: matterResult.data.tags,
      slug: filename.replace(".md", ""),
    };
  });

  return posts;
}
