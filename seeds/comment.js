const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "No way!",
        user_id: 2,
        post_id: 3,
        
    },
    {
        comment_text: "My First Comment :)",
        user_id: 2,
        post_id: 5,
        
    },
    {
        comment_text: "Awesome",
        user_id: 4,
        post_id: 1,
        
    },
    {
        comment_text: "Nice.",
        user_id: 3,
        post_id: 5,
        
    },
    {
        comment_text: "Very cool.",
        user_id: 3,
        post_id: 4,
        
    },
    {
        comment_text: "Good thing to know",
        user_id: 2,
        post_id: 1,
        
    },
    {
        comment_text: "Very informative",
        user_id: 5,
        post_id: 3,
        
    },
    {
        comment_text: "I'd like to know more.",
        user_id: 2,
        post_id: 1,
        
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;