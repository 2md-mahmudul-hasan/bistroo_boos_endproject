import React from 'react'

import logo from '../../../assets/logo.png'

const Footer = () => {
  return (
    <div>
      <footer className="footer grid-cols-2 p-10 bg-base-300 text-base-content">

        <div className="bg-base-400">
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div className="bg-black">
          <header className="footer-title">Legal</header>

        </div>
      </footer>
      <div className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <div className="w-full text-center p-4 flex items-center justify-center m-auto bg-black">
          <p >ACME Industries Ltd. &copy; Providing reliable tech since {new Date().getFullYear()}</p>
        </div>

      </div>
    </div>
  )
}

export default Footer