# Blog Site

A simple blog website created with Node.js, Express, and EJS that allows users to read and write blog posts.

## Features

- **Home Page:** Displays an introduction and a list of blog posts. Each post shows a preview of its content with a "Read More" link if the content is lengthy.
- **Compose Page:** Users can create a new blog post by providing a title and content.
- **Individual Post Page:** Shows full content of a selected blog post.
- **About & Contact Pages:** Static pages providing information about the blog and ways to get in touch.
- **Responsive Design:** Built using Bootstrap for responsive layouts and modern UI components.

## Technologies Used

- **Node.js & Express:** Backend server and routing.
- **EJS:** Templating engine for dynamic HTML generation.
- **Bootstrap:** Frontend framework for styling.
- **Lodash:** Utility library to simplify string manipulation (e.g., kebabCase conversion).

## Folder Structure

```
BlogSite/
├── app.js            // Main server file
├── package.json      // Project dependencies and scripts
├── .gitignore        // Ignores node_modules folder
├── README.md         // Project documentation
├── public/
│   └── css/
│       └── styles.css  // Custom styles
├── views/
│   ├── about.ejs       // About page template
│   ├── compose.ejs     // Compose page template
│   ├── contact.ejs     // Contact page template
│   ├── home.ejs        // Home page template
│   ├── post.ejs        // Individual post template
│   └── partials/
│       ├── header.ejs  // Header (navbar and page head)
│       └── footer.ejs  // Footer content
```

## Setup & Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/talhahossa1n/blog-site.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd BlogSite
   ```
3. **Install dependencies:**
   ```sh
   npm install
   ```
4. **Run the project:**
   ```sh
   npm start
   ```

The server will start on port `3000`. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the blog.

## Usage

- **Home Page:** Displays introductory content and blog posts. Click on "Read More" to view a post in full.
- **Compose Page:** Navigate to `/compose` to write a new blog post.
- **Static Pages:** Visit `/about` and `/contact` for additional information.

## Future Enhancements

- **Persistent Storage:** Integrate a database (e.g., MongoDB) to save posts permanently.
- **User Authentication:** Allow users to sign up, log in, and manage their posts.
- **Rich Text Editor:** Enhance the compose page with advanced text formatting options.

## License

This project is licensed under the **ISC License**.

## Author

**Md. Talha Hossain**

## Credits
This project is a part of Angela Yu's web development course and is inspired by her teachings.
