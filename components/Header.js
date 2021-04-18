import Link from 'next/link'
// import Image from 'next/image'
// import styles from './Header.module.css'

export default function Header() {
  return (
    <>
      <nav>
        <Link href='/'>
          <a>
            <div className="logo-image" />
            Emran Hossen</a>
        </Link>
        <div>
          <Link href='/'>
            <a>Blog</a>
          </Link>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </div>
      </nav>
      <style jsx>{`
        nav {
          background: #444;
          width: auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1rem;
        }
        nav a {
          margin-right: 1rem;
          text-decoration: none;
        }
        nav a:hover {
          text-decoration: underline;
        }
        .logo-image {
          display: inline-block;
          overflow: hidden;
          height: 80px;
          width: 80px;
          background-color: brown;
          background-image: url("/assets/emran_thumb.jpg");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
      `}</style>
    </>
  )
}
