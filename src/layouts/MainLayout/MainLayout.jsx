import Header from './Header';
import Library from './Library';

function MainLayout({ children }) {
    return (
        <div>
            <Header />
            <div>
                <Library />
                <div>{children}</div>
            </div>
        </div>
    );
}

export default MainLayout;
