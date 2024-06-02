import profileImage from "../images/Profile.png"
export default function Info() {
    return (
        <div className="info">
            <img className="info--image" src={profileImage} alt="My profile picture" />
            <h1 className="info--name">Daniel Bashary</h1>
            <h5 className="info--job">Fullstack Developer</h5>
            <div className="info--buttons">
                <button
                    className="info--linkedin"
                    onClick={() => window.location.href = 'https://www.linkedin.com/in/yourprofile'}
                >
                    <i className="fab fa-linkedin icon"></i> LinkedIn
                </button>
                <button
                    className="info--email"
                    onClick={() => window.location.href = 'mailto:dbash@g.com'}
                >
                    <i className="fas fa-envelope icon"></i> Email
                </button>
            </div>
        </div>
    )
}