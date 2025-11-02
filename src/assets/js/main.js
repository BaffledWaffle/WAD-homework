/* === DROPDOWN MENU === */
document.addEventListener("DOMContentLoaded", function() {
const accountImg = document.getElementById("account-img");
const dropdown = document.getElementById("myDropdown");

accountImg.addEventListener("click", function(event) {
    event.stopPropagation(); 
    dropdown.classList.toggle("show");
});

// close dropdown menu if clicked
document.addEventListener("click", function() {
    dropdown.classList.remove("show");
});
});

// /* === json usage with URL === */

// document.addEventListener("DOMContentLoaded", function() {
// const url = 'https://api.jsonbin.io/v3/b/6904951bae596e708f39ffc3';


// fetch(url)  // fetch(url) if json from website
//     .then(response => response.json())
//     .then(data => {
//         const posts = data.record; // for url 
//         const feed = document.getElementById('feed-of-posts');
//         const postsArray = Array.isArray(posts) ? posts : [posts];

//         postsArray.forEach(post => {
//             const postDiv = document.createElement('div');
//             postDiv.className = 'post';

//             postDiv.innerHTML = `
//                 ${post.image_path ? `
//                 <div class="post-images">
//                     <img src="${post.image_path}" alt="post">
//                 </div>` : ''}
                
//                 <div class="avatar-text">
//                     <div class="user-avatar"><img src="${post.avatar_path}" alt="user-avatar"></div>
//                     <div class="text">
//                         <p class="usernames">${post.author}</p>
//                         <p class="main-text">${post.description}</p>
//                         <button>Show more</button>
//                         <div class="post-like">
//                             <button></button>
//                             <p>${post.likes}</p>
//                         </div>
//                     </div>
//                 </div>
//             `;

//             feed.appendChild(postDiv);

//             // ===== Show more functionality for dynamic posts =====
//             const text = postDiv.querySelector(".main-text");
//             const button = postDiv.querySelector("button");

//             // measure full height
//             const clone = text.cloneNode(true);
//             clone.style.visibility = "hidden";
//             clone.style.position = "absolute";
//             clone.style.height = "auto";
//             clone.style.webkitLineClamp = "unset";
//             clone.classList.add("expanded");
//             document.body.appendChild(clone);

//             if (clone.offsetHeight <= text.offsetHeight) button.style.display = "none";
//             clone.remove();

//             button.addEventListener("click", function() {
//                 text.classList.toggle("expanded");
//                 this.textContent = text.classList.contains("expanded") ? "Show less" : "Show more";
//             });
//         });
//     })
//     .catch(error => console.error('Error loading JSON:', error));
// });

/* === LOCAL JSON FETCH === */
document.addEventListener("DOMContentLoaded", function() {
    fetch('assets/js/json/posts.json')
        .then(response => response.json())
        .then(posts => {
            renderPosts(posts);
        })
        .catch(error => console.error('Error loading local JSON:', error));
});

/* === RENDER POSTS === */
function renderPosts(posts){
    const feed = document.getElementById('feed-of-posts');
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.innerHTML = `
            ${post.image_path ? `
            <div class="post-images">
                <img src="${post.image_path}" alt="post">
            </div>` : ''}
            <div class="avatar-text">
                <div class="user-avatar"><img src="${post.avatar_path}" alt="user-avatar"></div>
                <div class="text">
                    <p class="usernames">${post.author}</p>
                    <p class="main-text">${post.description}</p>
                    <button>Show more</button>
                    <div class="post-like">
                        <button></button>
                        <p>${post.likes}</p>
                    </div>
                </div>
            </div>
        `;
        feed.appendChild(postDiv);

        // ===== Show more functionality =====
        const text = postDiv.querySelector(".main-text");
        const button = postDiv.querySelector("button");
        const clone = text.cloneNode(true);
        clone.style.visibility = "hidden";
        clone.style.position = "absolute";
        clone.style.height = "auto";
        clone.classList.add("expanded");
        document.body.appendChild(clone);

        if (clone.offsetHeight <= text.offsetHeight) button.style.display = "none";
        clone.remove();

        button.addEventListener("click", function() {
            text.classList.toggle("expanded");
            this.textContent = text.classList.contains("expanded") ? "Show less" : "Show more";
        });
    });
}