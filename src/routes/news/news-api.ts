export interface NewsType {
  by: string
  descendants: number
  id: number
  score: number
  time: number
  title: string
  type: string
  url: string
}

export async function getLatestNews(){

 const news = await fetch("https://hacker-news.firebaseio.com/v0/newstories.json")
    .then(response => response.json() as Promise<string[]>)
  .then(data => {
    const latestPosts = data.slice(0, 10);  // Get only the first 10 items
    return Promise.all(
      latestPosts.map(postId =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${postId}.json`)
          .then(response => response.json() as Promise<NewsType>)
      )
    );
  })
  .then(posts => {
    console.log("posts in then block ===>",posts)
    return posts
    
})
  .catch(error => console.error(error));
    
  if(news){
    return news
  }
  return null  
}
