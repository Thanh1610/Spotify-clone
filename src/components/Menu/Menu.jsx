import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';

import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { useState } from 'react';

import MenuWrapper from '@/components/Popper';
import MenuItem from './MenuItem';

function Menu() {
    const [visible, setVisible] = useState(false);

    const handleToggle = () => setVisible((prev) => !prev);
    const handleOnClickOutSide = () => setVisible(false);
    return (
        <TippyHeadless
            appendTo={document.body}
            placement="bottom-end"
            interactive
            visible={visible}
            onClickOutside={handleOnClickOutSide}
            render={(attrs) => (
                <div tabIndex="-1" {...attrs}>
                    <MenuWrapper>
                        <div className="p-1">
                            <MenuItem title="Account" to="/" icon={<FaArrowUpRightFromSquare />} />
                            <MenuItem title="Profile" to="/" />
                            <MenuItem title="Upgrade to Premium" to="/" icon={<FaArrowUpRightFromSquare />} />
                            <MenuItem title="Support" to="/" icon={<FaArrowUpRightFromSquare />} />
                            <MenuItem title="Download" to="/" icon={<FaArrowUpRightFromSquare />} />
                            <MenuItem title="Settings" to="/" />
                            <span className="flex flex-1 items-center justify-between truncate rounded-xs border-t border-t-[var(--bg-hover)] py-3 pr-2 pl-3 text-[0.875rem] font-normal text-[var(--white)] hover:bg-[var(--bg-hover)]">
                                Log out
                            </span>
                        </div>
                    </MenuWrapper>
                </div>
            )}
        >
            <button
                onClick={handleToggle}
                className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[var(--bg)] px-2 transition-transform delay-500 hover:scale-[1.04]"
            >
                <Tippy content="Tạ Tuấn Thành" placement="bottom" delay={[400, 0]} offset={[0, 20]} arrow={false}>
                    <div className="flex items-center justify-center gap-2 text-[0.875rem] font-extrabold text-[var(--text)]">
                        <img
                            className="h-8 w-8 rounded-full"
                            src="https://avatars.githubusercontent.com/u/198683346?v=4"
                            alt=""
                        />
                    </div>
                </Tippy>
            </button>
        </TippyHeadless>
    );
}

export default Menu;
