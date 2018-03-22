import React from 'react';
import NavBar from './NavBar';
import mookhLogo from '../images/mookh-logo-sm.png';

const Header = props => (
    <div>
        <section className="header">
            <div className="container">
                <h1>
                <img class="brand--logo" src={mookhLogo} alt="Mookh" />
                </h1>

                <div className="row">
                    <div className="column-2">
                        <div className="section">
                            <i class="material-icons">shopping_cart</i>
                            <h3 className="title">Buy Online</h3>
                            <div className="subtitle">Search for exisiting items below</div>
                            <p className="description">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint temporibus unde, neque dignissimos sapiente, ad et quod eaque distinctio tempore aspernatur. Animi illo aperiam ullam excepturi impedit itaque facere ipsum?
                            </p>

                            <input type="search" name="search" placeholder="Search" />
                        </div>
                    </div>

                    <div className="column-2">
                        <div className="section">
                            <i class="material-icons">date_range</i>
                            <h3 className="title">Sell Online</h3>
                            <div className="subtitle">Power your exisiting websites on social media pages</div>
                            <p className="description">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint temporibus unde, neque dignissimos sapiente, ad et quod eaque distinctio.
                            </p>

                            <div className="section--buttons top-space--lg">
                                <button className="learn">Learn more</button>
                                <button className="signup">Sign Up</button>
                                <button className="login">Log in</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <NavBar />
    </div>
);

export default Header;