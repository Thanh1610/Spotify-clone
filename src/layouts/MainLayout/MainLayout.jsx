import Header from './Header';
import Library from './Library';

function MainLayout({ children }) {
    return (
        <div className="min-h-screen p-2">
            <Header />
            <div>
                <Library />
                <div>{children}</div>
            </div>
        </div>
    );
}

export default MainLayout;
