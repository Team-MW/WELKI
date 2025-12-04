import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

function Layout({ children }) {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;


