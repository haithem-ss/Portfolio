# My Personal Portfolio

This project is my personal portfolio website built with Next.js, showcasing my work, skills, and blog posts.

## Project Overview

- **Modern Design**: Clean, responsive interface built with the latest web technologies
- **Portfolio Showcase**: Highlighting my best projects with descriptions and live demos
- **Blog Section**: Sharing my thoughts and experiences in web development
- **Contact Information**: Easy ways to reach out for collaboration opportunities

## Blog Content Management

All blog content is managed through markdown files:

- Add your markdown files to `src/content/blog/` directory
- Each post should include proper frontmatter for metadata
- Images can be stored in `public/images/blog/`

Example blog post structure:
```markdown
---
title: "Building Responsive Layouts with CSS Grid"
description: "A comprehensive guide to creating modern layouts using CSS Grid"
date: "2023-10-15"
tags: ["css", "web-design", "frontend"]
---

Your blog content goes here...
```

## Technologies Used

- **Next.js**: React framework for production-grade applications
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Content Layer**: For managing blog content from markdown files
- **Framer Motion**: For smooth animations and transitions

## Project Structure

The project follows a clean and organized structure:
- `app/`: Next.js app directory with route components
- `components/`: Reusable UI components
- `src/content/`: Blog post markdown files
- `public/`: Static assets like images and fonts
