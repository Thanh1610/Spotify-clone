import { FaRegArrowAltCircleDown, FaRegBell } from 'react-icons/fa';
import { Link } from 'react-router';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

function UserActions() {
    return (
        <div className="flex h-full items-center gap-2">
            {/* explore */}
            <Tippy content="Upgrade to Premium" placement="bottom" delay={[400, 0]} offset={[0, 20]}>
                <button className="btn-hover-scale flex h-8 w-36 items-center justify-center rounded-4xl bg-white">
                    <Link to="/premium" className="text-[0.875rem] font-extrabold text-black">
                        Explore Premium
                    </Link>
                </button>
            </Tippy>

            {/* install-app */}
            <button className="btn-hover-scale flex h-8 w-36 items-center justify-center rounded-4xl hover:text-white">
                <Link
                    to="/download"
                    className="flex items-center justify-center gap-2 text-[0.875rem] font-extrabold text-[var(--text)]"
                >
                    <FaRegArrowAltCircleDown />
                    Install App
                </Link>
            </button>

            {/* bell */}
            <Tippy content="What's New" placement="bottom" delay={[400, 0]} offset={[0, 20]}>
                <button className="flex items-center justify-center px-2">
                    <Link to="/content-feed" className="flex items-center justify-center">
                        <FaRegBell className="transition-color text-[1rem] text-[var(--text)] delay-1000 hover:text-white" />
                    </Link>
                </button>
            </Tippy>

            {/* profile */}
            <Tippy content="Tạ Tuấn Thành" placement="bottom" delay={[400, 0]} offset={[0, 20]}>
                <button className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[var(--bg)] px-2 transition-transform delay-500 hover:scale-[1.04]">
                    <div className="flex items-center justify-center gap-2 text-[0.875rem] font-extrabold text-[var(--text)]">
                        <img
                            className="h-8 w-8 rounded-full"
                            src="https://avatars.githubusercontent.com/u/198683346?v=4"
                            alt=""
                        />
                    </div>
                </button>
            </Tippy>

            <div className="h-full w-36"></div>
        </div>
    );
}

export default UserActions;
