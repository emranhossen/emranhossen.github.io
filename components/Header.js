import Link from 'next/link'

export default function Header() {
  return (
    <>
      <nav>
        <Link href='/'>
          <a>Emran's Blog</a>
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
      `}</style>
    </>
  )
}
