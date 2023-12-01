import './homePage.css';

import { IoIosSearch } from 'react-icons/io';
import { TbBell } from 'react-icons/tb';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaPlay } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';

function HomePage() {
    return (
        <div className="home-wrapper">
            <nav className="home-nav-bar">
                <div className="home-nav-route-container">
                    <span className="home-nav-logo">NETFLIX</span>
                    <ul className="home-nav-route">
                        <li>Home</li>
                        <li>TV Shows</li>
                        <li>Movies</li>
                        <li>New & Popular</li>
                        <li>My List</li>
                        <li>Browser by Language</li>
                    </ul>
                </div>
                <ul className="home-nav-sna-container">
                    <li>
                        <IoIosSearch />
                    </li>
                    <li>
                        <TbBell />
                    </li>
                    <li>
                        <img src="https://occ-0-58-395.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABe1R3ZpAl1zwvOwyGTsBdHOtyXSpIgzMIaUUWSQG0SHMS7qM1KiN4DWvSoiw82GAn4kWpN5bDcfQY8ojIdz6Q1a-AdxuJ6o.png?r=15e" />
                        <IoMdArrowDropdown />
                    </li>
                </ul>
            </nav>

            {/* Content */}
            <div className="home-content-container">
                {/* Content Intro */}
                <div className="home-content-intro">
                    <img src="https://occ-0-58-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWQpbjs_oN5t0PyWPirzA91xP_p-VFHMMhKAT3S2JAwallAZc2pJHX3w25stHZDb8xVGve8LyJfXuzqkQ7aqPPJIdahE7lBTY0wp.jpg?r=d59" />
                    <div className="home-content-intro-detail">
                        <img src="https://occ-0-58-395.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABcJj5k7azGaLWuDed5ExJcNT1SONsi3ginSLIOJODeUpVl5hHqwP8k2p0X7igGcdH-fypp6AlB7uCE3F7K-3z3lqBGJPMxCSAoKAiQ0z4iPA6iPkDNsFOB9WhmErk8pFs-gOs2sp_8FBftIi5LXIu9IGYPau9r2c0Oz0_49Fnc3X5zQsKyThvg.png?r=62c" />
                        <span>
                            To keep their annual Holiday Heist-tacular afloat, Mr. Wolf and his crew of animal outlaws
                            will have to restore the whole city's Christmas spirit — fast!
                        </span>
                        <div className="home-content-intro-button-container">
                            <button className="play-button">
                                <FaPlay /> <span>Play</span>
                            </button>
                            <button className="info-button">
                                <AiOutlineInfoCircle />
                                <span>More Info</span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Content Film Type */}
                <div>
                    <h1>Korean TV Shows</h1>
                    <div>
                        <a href="#">
                            <img src="https://occ-0-58-395.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUhnGDb4VWZjAsa_cOG_YpEBVu4skYts11DykVjCLHd8Yycfc8q0wCJdIkjWBzICsBVLPsTe91-0yCrury7YmzwCqJbUEwGYrrQ.jpg?r=6eb" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HomePage;
