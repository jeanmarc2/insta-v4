/* eslint-disable react/jsx-key */
import Post from "./Post"

export default function Posts() {
    const posts = [
        {
            id: "1",
            username: "saintjean",
            userImg: "https://images5.fanpop.com/image/photos/30200000/the-joker-the-joker-30239511-1025-756.jpg",
            img: "https://tse3.mm.bing.net/th?id=OIP.cnAFM1QOmZvwqn34nWt8-QHaEK&pid=Api&P=0&h=180",
            caption:"why so serious!?????????"
        },
        {
            id: "2",
            username: "jeanmarc",
            userImg: "https://tse3.mm.bing.net/th?id=OIP.EkJyPECAcdBsLN4nYunNYwHaJu&pid=Api&P=0&h=180",
            img: "https://tse1.mm.bing.net/th?id=OIP.VTR3a33gLgceHdh7XyoAiQHaJQ&pid=Api&P=0&h=180",
            caption:"you think the shadow is your allies, the shadows betrays you because they belong to me."
        }
    ]
  return (
      <div>
          {posts.map(post => (
              <Post
                  key={post.id}
                  id={post.id}
                  username={post.username}
                  userImg={post.userImg}
                 img ={ post.img }
                 caption={post.caption}
           />   
          ))}
    </div>
  )
}
