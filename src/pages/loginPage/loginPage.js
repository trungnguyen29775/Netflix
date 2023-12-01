import './loginPage.css';
// ------------------------Icon----------------------
import { IoIosArrowForward } from 'react-icons/io';

function LoginPage() {
    return (
        <div className="login-wrapper">
            <nav className="login-nav">
                <a href="#" className="logo__a">
                    NETFLIX
                </a>
                <div className="login-nav-item">
                    <select className="login-nav-language__select">
                        <option value={'English'}>English</option>
                        <option value={'English'}>Tiếng Việt</option>
                    </select>

                    <button className="login-nav-login-button">Sign In</button>
                </div>
            </nav>
            <div className="login-content">
                {/* Content  header */}
                <div className="login-content-header">
                    <img src="/image/backdrop.jpg" className="" />
                    <div className="login-content-header-title">
                        <span className="slogan">Laughter. Tears. Thrills. Find it all on Netflix.</span>
                        <span>Endless entertainment starts at just 70,000 ₫. Cancel anytime.</span>
                        <span className="sub">
                            Ready to watch? Enter your email to create or restart your membership.
                        </span>
                        <div className="login-content-subcribe-container">
                            <input placeholder="Email address" name="email" />
                            <button>
                                Get Started
                                <IoIosArrowForward />
                            </button>
                        </div>
                    </div>
                </div>
                {/* Content */}
                <div className="login-content-seperater"></div>
                <div></div>
            </div>
        </div>
    );
}
export default LoginPage;
