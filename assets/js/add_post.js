const addPostForm = document.querySelector('#add-post-form');


const addPost = async (e) => {
    e.preventDefault();
    
    // const uri = 'http://localhost:3000/posts'
    const uri = 'https://thusara-fake-json-server.herokuapp.com/posts';

    const templateObj = {
        title: addPostForm.title.value,
        body: addPostForm.content.value,
        summary: addPostForm.summary.value,
        category: addPostForm.category.value,
        date: dayjs().format('YYYY-M-D'),
        author: addPostForm.author.value,
        thumbnail: addPostForm.thumbnail.value,
    }

    const res = await fetch(uri, {
        method: 'POST',
        body: JSON.stringify(templateObj),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    // relocating
    window.location.replace('index.html')
}

addPostForm.addEventListener('submit', addPost)
// addPostForm.addEventListener('submit',(e)=>addPost())
