import config from '@/config';
import Home from '@/pages/Home';
import Explore from '@/pages/Explore';
import Profile from '@/pages/Profile';

export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.explore, component: Explore },
    { path: config.routes.profile, component: Profile },
];

export const privateRoutes = [];
