document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("id");
  
    if (userId) {
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
          const userDetail = document.getElementById("user-detail");
          userDetail.innerHTML = `
            <h2>${user.name}</h2>
            <p><strong>อีเมล</strong><br> ${user.email}</p>
            <p><strong>ชื่อผู้ใช้</strong><br> ${user.username}</p>
            <p><strong>เบอร์โทรศัพท์</strong><br> ${user.phone}</p>
            <p><strong>เว็บไซต์</strong><br> ${user.website}</p>
            <p><strong>ที่อยู่</strong><br> ${user.address.street}, ${user.address.suite}<br>${user.address.city}, ${user.address.zipcode}</p>
            <p><strong>บริษัท</strong><br> ${user.company.name}<br>${user.company.catchPhrase}</p>
          `;
        })
        .catch(error => console.error("Error fetching user details:", error));
    }
    document.getElementById("view-posts").addEventListener("click", () => {
        if (userId) {
          window.location.href = `user-posts.html?userId=${userId}`;
        }
      });

});