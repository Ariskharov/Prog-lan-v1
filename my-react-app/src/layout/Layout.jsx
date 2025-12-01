import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="app-shell d-flex flex-column min-vh-100">
      <header className="bg-dark border-bottom border-success-subtle shadow-sm">
        <div className="container py-3 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
          <NavLink className="navbar-brand text-uppercase text-success-emphasis fw-bold letter-spacing" to="/">
            Minecraft Hub
          </NavLink>
          <nav className="d-flex gap-3">
            <NavLink className="nav-link text-white-50" to="/">
              Пост-лист
            </NavLink>
            <a
              className="btn btn-success fw-semibold px-4"
              href="https://www.minecraft.net/"
              target="_blank"
              rel="noreferrer"
            >
              Играть
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-grow-1">
        <Outlet />
      </main>

      <footer className="bg-dark text-white-50 py-4 mt-auto">
        <div className="container d-flex flex-column flex-md-row justify-content-between gap-3">
          <p className="mb-0">
            © {new Date().getFullYear()} Minecraft Hub — фанатский портал о кубическом мире.
          </p>
          <p className="mb-0">Следи за биомами, строй креативно и делись историями!</p>
        </div>
      </footer>
    </div>
  );
}