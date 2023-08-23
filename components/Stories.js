"use client"

import minifaker from "minifaker"
import { useEffect, useState } from "react"
import Story from "./Story";
import "minifaker/locales/en"

export default function Stories() {
    const [storyUsers, setStoryUsers] = useState([]);
    useEffect(() => {
        const storyUsers = minifaker.array(20, (i) => (
            {
                username: minifaker.username({ locale : "en"}).toLowerCase(),
                img: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
                id: i,
            }));
        setStoryUsers(storyUsers)
        console.log(storyUsers);
    },[])
  return (
      <div>
          {storyUsers.map(user => (
              <Story key={user.id}
                  username={user.username}
                  img={user.img}
          />
      ))}
      </div>
  )
}
