import React, { Component } from 'react';
import Card from './Card';
import Header from './Header';
import Footer from './Footer';

import picOne from '../images/pic1.jpg';
import picTwo from '../images/pic2.jpg';
import picThree from '../images/pic3.jpg';
import picFour from '../images/pic4.jpg';
import picFive from '../images/pic5.jpg';
import picSix from '../images/pic6.jpg';

class App extends Component {
  render() {
    const details = 'Lorem, ipsum dolor sit amet adipisicing elit dit.';
    return (
      <div>
        <header>
          <Header />
        </header>

        <main>
          <div className="container">
            <div className="row">
              <Card
                category="Tickets"
                image={picOne}
                title="Blissful USION"
                owner="TEDx Kenya"
                albumDate={'Friday 13th April - 24 Days to go'}
              />
              <Card
                category="Products"
                image={picThree}
                title="Mama Zaza's Choclate chip cookies"
                owner="Maza Zaza Stores"
                details={details}
              />
              <Card
                category="Digital Content"
                image={picFive}
                title="Muthoni The Drama Queen"
                owner="Muthoni"
                details={'Album(12 Songs). LP Available'}
              />
            </div>

            <div className="row">
              <Card
                category="Tickets"
                image={picSix}
                title="MAY I?"
                owner="Beck & Gufy"
                albumDate={'Thursday 5th May - 1 Month to go'} />
              <Card
                category="Products"
                image={picTwo}
                title="TEDx Lavington Women 2016 Nairobi x Edition"
                owner="TEDx Kenya"
                details={details}
              />
              <Card
                category="Digital Content"
                image={picFour}
                title="Wasflah Rap 2"
                owner="Nasaha"
                details={'Album(12 Songs). LP Available'}
              />
            </div>
          </div>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
