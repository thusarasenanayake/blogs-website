const blogCards = document.querySelector('#blog_cards')
const coverPostHeading = document.querySelector('#cover-post-heading')
const coverPostSummary = document.querySelector('#cover-post-summary')
const coverPostLink = document.querySelector('#cover-post-link')
const searchForm = document.querySelector('#search_form')

// rendering posts

const renderPosts = async (searchTerm) => {
    let uri = 'http://localhost:3000/posts?_sort=id&_order=desc';

    if (searchTerm) {
        uri += `&q=${searchTerm}`
    }
    const res = await fetch(uri);
    const posts = await res.json();

    let template = '';

    const categoryColor = {
        World: 'primary',
        Health: 'danger',
        Politics: "success",
        Other: 'warning',
    }

    posts.forEach(post => {
        // layouting the cover post
        if (posts[0] === post) {
            coverPostHeading.innerHTML = post.title;
            coverPostSummary.innerHTML = post.summary;
            coverPostLink.href = `blog_item.html?id=${post.id}`
        }
        template += `
        <!-- A SINGLE CARD -->
        <div class="col-md-6">
            <div
                class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                    <strong class="d-inline-block mb-2 text-${categoryColor[post.category]}">${post.category}</strong>
                    <h3 class="mb-0">${post.title}</h3>
                    <div class="mb-1 text-muted mb-2"><small>${dayjs(post.date).format('MMMM D, YYYY')} by <a href="#" id="index_author">${post.author}</a></small></div>
                    <p class="card-text mb-auto">
                      ${post.summary.length < 200 ? post.summary : (post.summary).slice(0, 130) + " ..."}
                    </p>
                    <a href="blog_item.html?id=${post.id}" class="stretched-link">Continue reading</a>
                </div>
                <div class="col-auto d-none d-lg-block">
                     <img src="${post.thumbnail}" alt="Thumbnail" width="200" height="250" id="post-thumbnail">
                </div>
            </div>
        </div>`
    });
    blogCards.innerHTML = template;

}

// searching posts
const searchPosts = async (e) =>{
    e.preventDefault();
    let searchTerm = searchForm.search_box.value.trim();
    renderPosts(searchTerm)
} 


window.addEventListener('DOMContentLoaded', () => {
    renderPosts();
})
searchForm.addEventListener('submit',searchPosts)