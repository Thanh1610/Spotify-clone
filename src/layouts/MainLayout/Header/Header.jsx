import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GoHomeFill, GoHome } from 'react-icons/go';
import { Link, NavLink } from 'react-router';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Search from './Search';
import UserActions from './UserActions';

function Header() {
    return (
        <div className="-m-2 flex h-16 w-screen items-start justify-between p-2">
            {/* logo */}
            <Tippy content="Spotify" placement="bottom" delay={[400, 0]} offset={[20, 0]} arrow={false}>
                <div className="flex h-full w-[72px] items-center justify-center">
                    <Link to="/" className="flex items-center">
                        <FontAwesomeIcon icon={faSpotify} className="text-[32px] text-[var(--white)]" />
                    </Link>
                </div>
            </Tippy>

            <div className="flex h-full w-full justify-between">
                <div className="flex h-full items-center justify-center">
                    {/* home */}
                    <Tippy content="Spotify" placement="bottom" delay={[400, 0]} arrow={false}>
                        <div>
                            <NavLink
                                to="/"
                                className={() =>
                                    `btn-hover-scale ml-2 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--bg)] hover:bg-[var(--bg-hover)]`
                                }
                            >
                                {({ isActive }) =>
                                    isActive ? (
                                        <GoHomeFill className="text-2xl text-[var(--white)]" />
                                    ) : (
                                        <GoHome className="text-2xl text-[var(--text)]" />
                                    )
                                }
                            </NavLink>
                        </div>
                    </Tippy>

                    {/* search */}
                    <Search />
                </div>

                <UserActions />
            </div>
        </div>
    );
}

export default Header;
