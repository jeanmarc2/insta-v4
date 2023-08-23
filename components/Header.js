/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'


export default function Header() {
  return (
      <div>
          {/**Left */}
          <div className="flex items-center justify-between max-w-6xl">
          <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
              <Image
            src="http://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png"
                      
                     layout="fill"
            className="object-contain"
                  />
              </div>

              <div className="cursor-pointer h-24 w-10 relative lg:hidden">
              <Image
            src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                      
                     layout="fill"
            className="object-contain"
                  />
              </div>

              <h1>Right Sides</h1>
              </div>
          
          {/**Middle */}



          {/**Right */}


    </div>
  )
}
