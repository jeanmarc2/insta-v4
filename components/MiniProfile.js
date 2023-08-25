/* eslint-disable @next/next/no-img-element */

export default function MiniProfile() {
  return (
      <div className="flex items-center justify-between mt-14 ml-10">
          <img className="h-16 rounded-full border p-[2px]"
              src="https://images5.fanpop.com/image/photos/30200000/the-joker-the-joker-30239511-1025-756.jpg" alt="user-imgae" />
          
          <div className="flex-1 ml-4">
              <h2 className="font-bold">Saintjean</h2>
              <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
          </div>
          <button className="font-semibold text-blue-400 text-sm">Sign out</button>
      </div> 
  )
}
