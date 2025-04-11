import { CiSearch } from 'react-icons/ci';
import { HiOutlineArchiveBox } from 'react-icons/hi2';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

function Search() {
    return (
        <div className="group relative mx-2 h-full w-[474px] overflow-hidden rounded-4xl bg-[var(--bg)] transition-colors duration-[220ms] hover:bg-[#2a2a2a]">
            <button className="absolute top-1/2 left-2 -translate-y-1/2 transform cursor-pointer">
                <Tippy content="Search" placement="bottom" delay={[400, 0]} offset={[0, 20]}>
                    <CiSearch className="text-[26px] text-[var(--text)] transition-colors duration-[220ms] group-hover:text-white" />
                </Tippy>
            </button>

            <input
                placeholder="What do you want to play? "
                className="h-full w-full rounded-4xl pl-10 text-[1rem] text-[var(--text)] caret-white"
            />

            <button className="absolute top-1/2 right-3 -translate-y-1/2 transform">
                <div className="absolute top-1/2 right-6 z-10 mx-3 h-6 w-px -translate-y-1/2 transform bg-[var(--text)]" />

                <Tippy content="Browse" placement="bottom" delay={[400, 0]} offset={[0, 20]}>
                    <HiOutlineArchiveBox className="text-[26px] text-[var(--text)] transition-colors delay-200 duration-[220ms] hover:scale-[1.04] hover:text-white" />
                </Tippy>
            </button>
        </div>
    );
}

export default Search;
