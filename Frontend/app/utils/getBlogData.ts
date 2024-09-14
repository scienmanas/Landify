import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getBlogPostMetadata(folderPath: string) {
  const directory = path.join(process.cwd(), "public", folderPath);
  const folderNames = fs.readdirSync(directory); // Get all blog post folders

  const postMetadata = folderNames.map((folderName) => {
    const contentPath = path.join(
      directory,
      folderName,
      "content",
      "content.md"
    );

    // Read markdown file and extract front matter
    const fileContents = fs.readFileSync(contentPath, "utf8");
    const matterResult = matter(fileContents);

    // Construct blog metadata including image path
    return {
      title: matterResult.data.title,
      publishDate: matterResult.data.publishDate,
      description: matterResult.data.description,
      tags: matterResult.data.tags,
      image: `/blogs/${folderName}/images/header.png`, // Image path relative to the public folder
      slug: folderName, // Folder name as the slug
    };
  });

  return postMetadata;
}

export function getBlogPostData(folderPath: string, slug: string) {
  const directory = path.join(process.cwd(), "public", folderPath, slug);
  const file = path.join(directory, "content", "content.md");

  // Read markdown file and extract front matter
  const fileContents = fs.readFileSync(file, "utf8");
  const matterResult = matter(fileContents);

  // Construct blog metadata including image path
  return {
    title: matterResult.data.title,
    publishDate: matterResult.data.publishDate,
    description: matterResult.data.description,
    tags: matterResult.data.tags,
    image: `/blogs/${slug}/images/header.png`, // Image path relative to the public folder
    content: matterResult.content,
    slug: slug, // Folder name as the slug
  };
}
