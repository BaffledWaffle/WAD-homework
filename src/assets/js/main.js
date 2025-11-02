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




/* === POSTS DATA === */

//local json do not work with fetch and that why json directly in js 
//
const posts = [
    {
        "id": 1,
        "author": "Lilypad",
        "created_at": "2025-10-31T14:30:00Z",
        "description": "Sun is shining and my plants are lovin' it",
        "avatar_path": "assets/img/account_circle.svg",
        "image_path": "assets/img/post1.png",
        "likes": 128
    },
    {
        "id": 2,
        "author": "PhilosophyIsLife",
        "created_at": "2025-10-31T15:00:00Z",
        "description": "Have you ever really thought about pizza? ...",
        "avatar_path": "assets/img/account_circle.svg",
        "image_path": "",
        "likes": 256
    },
    {
        "id": 3,
        "author": "Daisy",
        "created_at": "2025-10-31T16:00:00Z",
        "description": "Since everyone loves cats, I thought I'd share a picture of my cat Voldemar (Volli for short)",
        "avatar_path": "assets/img/account_circle.svg",
        "image_path": "assets/img/Volli.png",
        "likes": 340
    },
    {
        "id": 4,
        "author": "PoeticFrog",
        "created_at": "2025-10-31T17:00:00Z",
        "description": "Seashells are whispers of the ocean, carrying the memory of waves in their quiet spirals",
        "avatar_path": "assets/img/account_circle.svg",
        "image_path": "assets/img/post2.png",
        "likes": 97
    },
    {
        "id": 5,
        "author": "PrettyBoy",
        "created_at": "2025-10-31T18:00:00Z",
        "description": "Tried to find some aesthetic pictures on Pinterest. This is what came up",
        "avatar_path": "assets/img/account_circle.svg",
        "image_path": "assets/img/OpossumWizard.jpg",
        "likes": 150
    }
];

/* === RENDER POSTS === */
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