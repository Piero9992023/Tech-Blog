const { Post } = require('../models');

const postData = [
    {
        title: "Express JS",
        content: "One cool fact about Express.js is its minimalist and flexible nature. Express.js is a minimal and unopinionated web framework for Node.js, which means it provides a robust set of features for building web and mobile applications, but it doesn't impose any strict guidelines or rules on how you should organize your project.",
        user_id: 1
    },
    {
        title: "Helmet NPM Package",
        content: "Helmet is a popular npm package for securing Express.js applications by setting various HTTP headers. One cool fact about Helmet is that it helps prevent common security vulnerabilities in web applications. ",
        user_id: 2
    },
    {
        title: "Handlebars.js",
        content: "Handlebars.js is a popular JavaScript templating engine that allows you to build semantic templates effectively. One cool fact about Handlebars.js is its simplicity and ease of use.",
        user_id: 2

    },
    {
        title: "CSS",
        content: "CSS allows developers to animate HTML elements using keyframes and transitions. This means you can create smooth animations, such as fading in and out, moving elements across the screen, and changing element sizes, purely with CSS.",
        user_id: 5
    },
    {
        title: "HTML",
        content: "HTML was first introduced in 1991 by Sir Tim Berners-Lee. The first version, HTML 1.0, was very basic compared to the HTML used today. It allowed researchers to access and share documents over the Internet. ",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;