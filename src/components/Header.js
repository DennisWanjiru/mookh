import React from 'react';
import NavBar from './NavBar';
import mookhLogo from '../images/mookh-logo-sm.png';

const Header = props => (
    <div>
        <section className="header">
            <div className="container">
                <img class="brand--logo" src={mookhLogo} alt="Mookh" />

                <div className="header__content">
                    <div className="section">
                        <h3 className="title">Buy Online</h3>
                        <div className="subtitle">Search for exisiting items below</div>
                        <p className="description">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint temporibus unde, neque dignissimos sapiente, ad et quod eaque distinctio tempore aspernatur. Animi illo aperiam ullam excepturi impedit itaque facere ipsum?
                    </p>

                        <input type="search" name="search" placeholder="Search" />
                    </div>

                    <div className="section">
                        <h3 className="title">Sell Online</h3>
                        <div className="subtitle">Power your exisiting websites on social media pages</div>
                        <p className="description">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint temporibus unde, neque dignissimos sapiente, ad et quod eaque distinctio.
                    </p>

                        <div className="section--buttons top-space--md">
                            <button className="learn">Learn more</button>
                            <button className="signup">Sign Up</button>
                            <button className="login">Log in</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <NavBar />
    </div>
);

export default Header;