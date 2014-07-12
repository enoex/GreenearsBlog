# Dan's Blog

This is the repoistory for Dan's blog.

## Setup
1. If gulp is not installed globally yet, run `sudo npm install gulp -g`
2. Run `npm install`

## Usage
Two processes must be run. The first is docpad, which serves and regenerates the site on file changes. The second is gulp, which will rebuild CSS and JS files when changed.

In two separate terminal tabs / windows, run:

1. `docpad run`
2. `gulp`


## Editing Files
Files to edit are in the `src` folder. The `out` folder contains the built, static version of the site which can be uploaded to S3.

Files which handle individual pages (e.g., an about page) are located in src/documents. 

### Adding new posts
To add a new post, add a new file in `src/documents/posts`. The post will be automatically rendered. You can use markdown by giving the filename a .html.md extension (e.g., `post-title.html.md`). Each file in the `posts` directory is an individual post. All posts files must contain a meta header, denoted by a group wrapped by three hyphens. E.g., 

    ---

    layout: "content"

    title: "Post Title"

    description: "Some short description"

    date: "2014-07-12"

    ---



