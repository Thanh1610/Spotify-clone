import { FaRegArrowAltCircleDown, FaRegBell, FaBell } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Menu from '@/components/Menu';

function UserActions() {
    return (
        <div className="flex h-full items-center gap-2">
            {/* explore */}
            <Tippy content="Upgrade to Premium" placement="bottom" delay={[400, 0]} offset={[0, 20]} arrow={false}>
                <button className="btn-hover-scale flex h-8 w-36 items-center justify-center rounded-4xl bg-[var(--white)]">
                    <Link to="/premium" className="text-[0.875rem] font-extrabold text-black">
                        Explore Premium
                    </Link>
                </button>
            </Tippy>

            {/* install-app */}
            <button className="btn-hover-scale flex h-8 w-36 items-center justify-center rounded-4xl hover:text-[var(--white)]">
                <Link
                    to="/download"
                    className="flex items-center justify-center gap-2 text-[0.875rem] font-extrabold text-[var(--text)]"
                >
                    <FaRegArrowAltCircleDown />
                    Install App
                </Link>
            </button>

            {/* bell */}
            <Tippy content="What's New" placement="bottom" delay={[400, 0]} offset={[0, 20]} arrow={false}>
                <button className="flex items-center justify-center px-2">
                    <NavLink to="/content-feed" className="flex items-center justify-center">
                        {({ isActive }) =>
                            isActive ? (
                                <FaBell className="transition-color text-[1rem] text-[var(--text)] delay-1000 hover:text-[var(--white)]" />
                            ) : (
                                <FaRegBell className="transition-color text-[1rem] text-[var(--text)] delay-1000 hover:text-[var(--white)]" />
                            )
                        }
                    </NavLink>
                </button>
            </Tippy>

            {/* profile */}
            <Menu />

            <div className="h-full w-36"></div>
        </div>
    );
}

export default UserActions;
