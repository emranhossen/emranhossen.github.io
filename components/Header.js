import Link from 'next/link'
// import Image from 'next/image'
import styles from './Header.module.css'

export default function Header() {
	return (
		<>
			<nav className={styles.mainNav}>
				<Link href='/'>
					<a>
						<div className={styles.fullLogo}>
							<div className={styles.imageContainer}>
								<div className="logo-image" />
							</div>
							<div className={styles.logoName}>
								<span className={styles.firstName}>Emran</span> <span className={styles.lastName}>Hossen</span>
            				</div>
						</div>
					</a>
				</Link>
				<div className={styles.menuItem}>
					<Link href='/'>
						<a>Blog</a>
					</Link>
					<Link href='/about'>
						<a>About</a>
					</Link>
				</div>
			</nav>
			<style jsx>{`
        .logo-image {
          display: inline-block;
          overflow: hidden;
          height: 70px;
          width: 70px;
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
