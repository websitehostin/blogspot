// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Fetch blog posts from MongoDB
    fetch('https://your-mongodb-url/posts')
        .then(response => response.json())
        .then(posts => {
            const postsContainer = document.getElementById('posts');
            posts.forEach(post => {
                const postElement = document.createElement('article');
                postElement.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.content}</p>
                    <small>${new Date(post.created_at).toLocaleDateString()}</small>
                `;
                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error fetching posts:', error));
});
