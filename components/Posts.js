/* eslint-disable react/jsx-key */
import Post from "./Post"

export default function Posts() {
    const posts = [
        {
            id: "1",
            username: "saintjean",
            userImg: "https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg",
            img: "https://tse3.mm.bing.net/th?id=OIP.cnAFM1QOmZvwqn34nWt8-QHaEK&pid=Api&P=0&h=180",
            caption:"why so serious!?????????"
        },
        {
            id: "2",
            username: "jeanmarc",
            userImg: "https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg",
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
