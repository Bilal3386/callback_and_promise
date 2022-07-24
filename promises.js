const posts = [
    {title: "post one", body:"this is post one"},
    {title: "post two", body:"this is post two"}
]

function getPost() {
    let output = ''
    setTimeout(()=> {
        posts.forEach((value, index) => {
            //console.log(value.createAt)
            output += `<li>${value.title}</li>`
        });
        document.body.innerHTML = output
    },1000)
}



function createPost(post) 
{
    return new Promise((resolve, reject) => 
    {
        setTimeout(() => {
            posts.push(post)
            const err = false
            if(!err) 
            {
                resolve()
            }else{
                reject("Error: Something went wrong")
            }
        }, 1000);
    })
    
}

function deletePost() {
    return new Promise((resolve, reject) =>
    {
        //console.log(posts.length)
        setTimeout(() => {
            console.log(posts.pop())
            const err = posts.length === 0
            !err ? resolve() : reject("Error: Array is empty now")
        },1000)
    })
}

const updatedDetails = async () => 
{
    try {
        console.log(await deletePost());
        } catch (error)
        {
            console.log(error);
        }
    await createPost({title: 'post three', body: 'this is post three'});
    await getPost();
    
    //await getPost();
}

updatedDetails()
// function create4thPost(post) {
//     return new Promise((resolve, reject) =>
//     {
//         setTimeout(() =>
//         {
//             posts.push({...post, createAt: new Date().getTime()})
//             const err = false
//             !err ? resolve() : reject("Error: Something went wrong")
//         },1000)
//     })
    
// }

//  createPost({title:"post three", body:"this is post three"})
//  .then(getPost)
//  .catch(err => console.log(err))


//  create4thPost({title:"post four", body:"this is post four"})
//  .then(() => getPost(),
//  deletePost().then(() => getPost()))
//  .catch(err => console.log(err))

// // deletePost().then(getPost).catch(err => console.log(err))


// const promise1 = Promise.resolve('hello world')
// const Promise2 = 10
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'goodbye')
// })


// updateLastUserActivityTime()

// Promise.all([promise1,Promise2,promise3]).then((value) => console.log(value))

// //deletePost().then(getPost).catch(err => console.log(err))

// //  Promise all

// // const promise1 = Promise.resolve('Hello world')
// // create4thPost({title:"post four", body:"this is post four"}, getPost)

// const posts = [
//     {title: 'post one', body: 'this is one', lastActivityTime: '23th of jan'},
//     {title: 'post two', body: 'this is two', lastActivityTime: '23th of jan'}
// ]
// const createPost = (post) =>
// {
//     return new Promise((resolve, reject) =>
//     {
//         setTimeout( () => {
//             posts.push(post)
//             const err = false
//             !err ? resolve() : reject("Error: something went wrong")
//         }, 1000)
//     })
// }

// const updateLastUserActivityTime = () => 
// {
//     return new Promise((resolve,reject) => 
//     {
//         setTimeout(() =>{
//             posts.lastActivityTime = new Date().getTime();
//             resolve(posts.lastActivityTime)
//             reject("Error")
//         }, 1000)
//     })
// }
// createPost({title: 'he', body:'tit', lastActivityTime: 'b'})
// function postUpdate() {
//     Promise.all([createPost, updateLastUserActivityTime])
//     .then(([createPost, updateLastUserActivityTime]) => 
//     {
//         console.log(updateLastUserActivityTime)
//     }).catch(err => console.log(err))
// }


// console.log(posts);
// //console.log(updateLastUserActivityTime)