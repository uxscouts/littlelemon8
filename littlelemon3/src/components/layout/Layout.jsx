import { Header } from './Header';
import HeaderNav from './HeaderNav';
import HomeIntro from './HomeIntro';
import Footer from './Footer';


const Layout = ({ children }) => (
  <>
    <Header>
      <HeaderNav />
    </Header>
    <HomeIntro />
    <main className='LittleLemon_Container'>{children}</main>
    <Footer/>
  </>
);

export default Layout;