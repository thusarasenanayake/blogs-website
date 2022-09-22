const blogPost = document.querySelector('#blog-post');
const id = new URLSearchParams(window.location.search).get('id')
const deletePostBtn = document.querySelector('#delete-post-btn')
//const uri = `http://localhost:3000/posts/${id}`
const uri = `https://thusara-fake-json-server.herokuapp.com/posts/${id}`

// rendering a post
const renderPost = async () => {
    const res = await fetch(uri);
    const post = await res.json();

    const template = `
    <h2 class="blog-post-title" id="title">${post.title}</h2> 
    <p class="blog-post-meta">${dayjs(post.date).format('MMMM D, YYYY')} by <a href="#">${post.author}</a></p>
    
    ${post.body}
    `
    blogPost.innerHTML = template;
}
//  deleting a post
const deletePost = async () => {
    const res = await fetch(uri, {
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        }
    });
    // relocating 
    window.location.replace('index.html');
}


// event listeners
window.addEventListener('DOMContentLoaded',()=>renderPost())
deletePostBtn.addEventListener('click',()=> deletePost(uri))
