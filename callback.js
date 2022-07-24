
const posts = [
    {title: "post one", body:"this is post one", createAt: new Date().getTime()},
    {title: "post two", body:"this is post two", createAt: new Date().getTime()},
]

function getPost() {
    let output = ''
    setTimeout(()=> {
        posts.forEach((value, index) => {
            //console.log(value.createAt)
            output += `<li>${value.title} created ${(new Date().getTime() - value.createAt)/1000} seconds ago</li>`
        });
        document.body.innerHTML = output
    },1000)
}

function createPost(post, callback) 
{
    setTimeout(() => {
        posts.push({...post, createAt: new Date().getTime()})
        callback()
    }, 2000);
}

function create4thPost(post, callback) {
    setTimeout(() =>
        {
            posts.push({...post, createAt: new Date().getTime()})
            callback()
        },2000)
}

createPost({title:"post three", body:"this is post three"}, getPost)
create4thPost({title:"post four", body:"this is post four"}, getPost)
