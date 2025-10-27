import Link from 'next/link'
export default function DashboardLayout({ children }) {
  return (
    <html>
      <body>
        <nav>
          {/* Prefetched when the link is hovered or enters the viewport */}
          <Link href="/blog">Blog</Link>
          {/* No prefetching */}
          <a href="/contact">Contact</a>

          <a href='/'>Home</a>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}