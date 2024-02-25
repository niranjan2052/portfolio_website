import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer border z-10 border-top-[#33353F] border-l-transparent border-r-transparent">
        <div className="container p-8 flex items-center justify-between">
            <span>
            <Image
              src="/Images/logo.png"
              alt="logo image"
              className="ml-10"
              width={50}
              height={50}
            />
            </span>
            <p className="text-slate-600">&copy; All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer