import { Header } from './Header';
import HeaderNav from './HeaderNav';
import Footer from './Footer';


const Layout = ({ children }) => (
  <>
    <Header>
      <HeaderNav />
    </Header>
    <main className='LittleLemon_Container'>{children}</main>
    <Footer/>
  </>
);

export default Layout;