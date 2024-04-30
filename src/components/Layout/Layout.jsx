import Navigation from '../Navigation/Navigation.jsx';
import css from '../Layout/Layout.module.css';
export default function Layout({children}) {
    return (
        <div className={css.container}>
            <Navigation />
            {children}
        </div>
    )
}