import { Link } from 'react-router';
function MenuItem({ title, icon, to }) {
    return (
        <Link
            to={to}
            target="_blank"
            className="flex items-center justify-between gap-3 rounded-xs py-3 pr-2 pl-3 text-[var(--white)] hover:bg-[var(--bg-hover)] hover:underline"
        >
            <span className="flex-1 truncate text-[0.875rem] font-normal">{title}</span>
            {icon}
        </Link>
    );
}

export default MenuItem;
