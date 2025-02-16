document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("userId");
    
    if (userId) {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(user => {
                document.getElementById("user-name").textContent = user.name;
            })
            .catch(error => console.error("Error fetching user details:", error));
        
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(response => response.json())
            .then(posts => {
                const postsList = document.getElementById("posts-list");
                
                if (posts.length === 0) {
                    postsList.innerHTML = "<p>ไม่มีโพสต์สำหรับผู้ใช้นี้</p>";
                    return;
                }
                
                posts.forEach(post => {
                    const postItem = document.createElement("div");
                    postItem.classList.add("post-item");
                    postItem.innerHTML = `
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>
                        <button class="comment-btn")">ดูความคิดเห็น</button>
                    `;
                    postsList.appendChild(postItem);
                });
            })
            .catch(error => console.error("Error fetching posts:", error));
    }
});