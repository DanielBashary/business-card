export default function Footer() {
    return (
        <div className="footer">
            <button className="footer--icon" onClick={() => window.location.href = 'https://www.linkedin.com/in/yourprofile'}>
                <i className="fab fa-linkedin icon"></i>
            </button>
            <button className="footer--icon" onClick={() => window.location.href = 'https://www.linkedin.com/in/yourprofile'}>
                <i className="fab fa-github icon"></i>
            </button>
            <button className="footer--icon" onClick={() => window.location.href = 'https://www.linkedin.com/in/yourprofile'}>
                <i className="fab fa-twitter icon"></i>
            </button>
            <button className="footer--icon" onClick={() => window.location.href = 'https://www.linkedin.com/in/yourprofile'}>
                <i className="fab fa-instagram icon"></i>
            </button>
        </div>
    )
}