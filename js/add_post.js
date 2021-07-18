const addPostForm = document.querySelector('#add-post-form');

const addPost = async(e) =>{
    e.preventDefault();

    const templateObj = {
        title:addPostForm.title.value,
        body:addPostForm.content.value,
        summary:addPostForm.summary.value,
        category:addPostForm.category.value,
        date:dayjs().format('YYYY-M-D'),
        author:addPostForm.author.value,
        thumbnail:addPostForm.thumbnail.value,
    }

    const res = await fetch ('http://localhost:3000/posts',{
        method:'POST',
        body:JSON.stringify(templateObj),
        headers:{
            'Content-Type':'application/json'   
        }
    })

    // relocating
    window.location.replace('index.html')
}

addPostForm.addEventListener('submit',addPost)
// addPostForm.addEventListener('submit',(e)=>addPost())
