/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import { SearchIcon, PlusCircleIcon } from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'

export default function Header() {
  return (
      
      <div className="shadow-sm border-b sticky top-0 bg-white z-30">
          
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
          {/**Left */ }
          <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
              <Image
            src="http://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png"
                      
                     layout="fill"
                      className="object-contain"
                      alt="Website logo"
                  />
              </div>

              <div className="cursor-pointer h-24 w-10 relative lg:hidden">
              <Image
            src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                      
                     layout="fill"
                      className="object-contain"
                      alt="Website logo small"
                  />
          </div>
          {/**Middle */}
          <div className="relative mt-1">
              <div className="absolute top-2 left-2">
                  <SearchIcon className="h-5 text-gray-500"/>
              </div>
              <input type="text" placeholder="Search" className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black
               focus:border-black rounded-md"/>
          </div>

          {/**Right */}

          <div className="flex space-x-4 items-center">
              <HomeIcon className='hidden md:inline-grid h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out'/>
              <PlusCircleIcon className='h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out'/>
              <img src="https://images5.fanpop.com/image/photos/30200000/the-joker-the-joker-30239511-1025-756.jpg" alt="user-image"
                  className="h-10 rounded-full cursor-pointer" />
          </div>
          </div>
          </div>
              
  )
}
