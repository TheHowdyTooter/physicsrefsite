import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

const RootLayout = () => (
  <>
    <div id='root' className="background">
      <Link to="/" className="text">
        Home
      </Link>{' '}
      <Link to="/about" className="text">
        About
      </Link>
    </div>
    <hr />
    <Outlet />
  </>
)

export const Route = createRootRoute({ component: RootLayout })