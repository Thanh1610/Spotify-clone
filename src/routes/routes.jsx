import config from '@/config';
import Home from '@/pages/Home';
import Explore from '@/pages/Explore';
import Profile from '@/pages/Profile';
import DownLoad from '@/pages/Download';
import ContentFeed from '@/pages/ContentFeed';

export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.explore, component: Explore },
    { path: config.routes.download, component: DownLoad },
    { path: config.routes.feed, component: ContentFeed },
    { path: config.routes.profile, component: Profile },
];

export const privateRoutes = [];
