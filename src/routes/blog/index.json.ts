import type { Request, Response } from "express";
import posts from "./_posts.js";

const contents = JSON.stringify(
  posts.map((post) => {
    return {
      title: post.title,
      slug: post.slug,
    };
  })
);

export function get(req: Request, res: Response): void {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(contents);
}
