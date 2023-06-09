import TopBar from '../components/Topbar/TopBar';
import Navigation from '../components/Navigation/Navigation';
import RightSidebar from '../components/RightSide/RightSidebar';
import { MainSection } from './App/App.styled';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <TopBar />
      <Navigation />
      <RightSidebar />
      <MainSection>
        <Outlet />
      </MainSection>
    </div>
  );
};
export default Layout;
