function Wrapper({ children }) {
    return (
        <div className="max-h-[330px] max-w-[350px] min-w-[196px] overflow-y-auto rounded-[8px] bg-[var(--bg)] text-[var(--white)] select-none">
            {children}
        </div>
    );
}

export default Wrapper;
