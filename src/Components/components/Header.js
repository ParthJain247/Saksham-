import './Header.css'

const Header = ({ content, title }) => {
    return (
        <div className="header-content">
            <div className="header-title">
                {title}
            </div>
            {content}
        </div>
    )
}

export default Header
