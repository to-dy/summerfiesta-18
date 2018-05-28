import React, { Component } from 'react';
import InstagramEmbed from 'react-instagram-embed';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import Media from "react-media";
import logo from './images/logo.svg';
import date from './images/date.svg';
import './App.css';
import Timer from './Timer';
import Images from './images';

const URL = 'https://summerfiesta.us18.list-manage.com/subscribe/post?u=fa21c8cb15363c07d39e4b606&amp;id=2856d80564';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // lineUp: [
      //   {
      //     image: Images.not_nilc,
      //     name: 'NOT.NILC',
      //   },
      //   {
      //     image: Images.not_nilc,
      //     name: 'NOT.NILC',
      //   },
      //   {
      //     image: Images.not_nilc,
      //     name: 'NOT.NILC',
      //   },

      // ],
      partners: [
        {
          image: Images.smile,
          name: 'Smile',
        },
        {
          image: Images.ntdil,
          name: 'Noting To Do In Lagos',
        },
      ],
      media: [
        { image: Images.media1 },
        { image: Images.media2 },
        { image: Images.media3 },
        { image: Images.media4 },
        { image: Images.media5 },
        { image: Images.media6 },
      ],
      vendors: [
        {
          image: Images.abacha_kitchen,
          name: 'Abacha Kitchen',
          menu: ['African salad (Abacha)']
        },
        {
          image: Images.bj_asun,
          name: 'BJ Asun & Suya',
          menu: ['Asun', 'Suya']
        },
        {
          image: Images.oliver_signatures,
          name: 'Oliver Signatures',
          menu: ['Small chops', 'Ice cream', 'Cocktails']
        },
        {
          image: Images.palms_bamboo,
          name: 'Palms & Bamboo',
          menu: ['Palm wine']
        },
        {
          image: Images.party_palmwine,
          name: 'Party Plamwine',
          menu: ['Palm wine']
        },
        {
          image: Images.doubleB,
          name: 'Double Bee\'s Grill',
          menu: ['Chips', 'Barbecue', 'Chapman']
        },
        {
          image: Images.dShawarma,
          name: `D'Shawarma Place`,
          menu: ['Shawarma']
        },
        {
          image: Images.crispy_grill,
          name: 'Crispy & Grill',
          menu: ['Chips and grills']
        },
        {
          image: Images.popcorn_palace,
          name: 'Popcorn Palace',
          menu: ['Popcorn']
        },
        {
          image: Images.wilsons,
          name: 'Wilson\'s Juice Company',
          menu: ['Lemonade']
        },
        {
          image: Images.boutDrinks,
          name: 'boutdrinks.com',
          menu: ['Drinks']
        },
      ],
      email: '',
    };
  }

  _renderInput(css) {
    return (
      <MailchimpSubscribe
        ref={input => this.input = input}
        url={URL}
        render={({ subscribe, status, message }) =>
          <form className="inputContainer" id="form" onSubmit={(e) => {
            e.preventDefault();
            if (this.state.email) {
              subscribe({ EMAIL: this.state.email });
              return true;
            }
          }}>
            <input
              value={this.state.email}
              type="email"
              className=""
              placeholder="email@example.com"
              id="searchText"
              onChange={(e) => this.setState({ email: e.target.value })}
              required
            />
            <button
              form="form"
            // onClick={}
            >
              <img src={Images.arrow} alt="" />
            </button>
            {status === 'sending' && <div className="form-test" style={{ backgroundColor: 'yellow', width: '100%', height: 15, fontSize: 12, textAlign: 'center' }}>Loading...</div>}
            {status === 'success' && <div className="form-test" style={{ backgroundColor: 'green', width: '100%', height: 15, fontSize: 12, textAlign: 'center' }}>Subscribed!</div>}
            {status === 'error' && <div className="form-test" style={{ backgroundColor: 'red', width: '100%', height: 15, fontSize: 12, textAlign: 'center' }}>Error! Try again</div>}
          </form>
        }
      />

    )
  }

  render() {
    return (
      <div className="container">
        <nav className="sidebar">

          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#partners">PARTNERS</a></li>
            <li><a href="#vendors">VENDORS</a></li>
            <li><a href="#media">MEDIA</a></li>
            <li><a href="#sf17">SF 17'</a></li>
          </ul>

          <div className="subscribe d">
            <p>Subscribe</p>
            <small>get all the latest updates about Summer Fiesta</small>
            {/* to ensure that only one instance of the input is rendered  */}
            <Media query="(min-width: 768px)">
              {matches =>
                matches ?
                  this._renderInput() : true}
            </Media>
          </div>

          <div className="social">
            <ul>
              <li><a href="https://twitter.com/summerfiesta_ng" target="_blank" rel="noopener noreferrer"><img src={Images.twitterC} alt="" /></a></li>
              <li><a href="https://www.facebook.com/summerfiestang/" target="_blank" rel="noopener noreferrer"><img src={Images.fbC} alt="" /></a></li>
              <li><a href="https://instagram.com/summerfiesta_ng/" target="_blank" rel="noopener noreferrer"><img src={Images.instagramC} alt="" /></a></li>
            </ul>
          </div>

          <div className="made-by">
            Made with ♥ by <a href="https://twitter.com/todywa" target="_blank" rel="noopener noreferrer">Tody</a>
          </div>
        </nav>
        <main className="content">
          <div className="header">
            <div className="menu">
              <img src={Images.menu} id="menu" alt="menu" />
              <div className="menu-content">
                <ul>
                  <li><a href="#home">HOME</a></li>
                  <li><a href="#partners">PARTNERS</a></li>
                  <li><a href="#vendors">VENDORS</a></li>
                  <li><a href="#media">MEDIA</a></li>
                  <li><a href="#sf17">SF 17'</a></li>
                </ul>
              </div>
            </div>

            <div className="social">
              <ul>
                <li><a href="https://twitter.com/summerfiesta_ng" target="_blank" rel="noopener noreferrer"><img src={Images.twitterW} alt="" /></a></li>
                <li><a href="https://www.facebook.com/summerfiestang/" target="_blank" rel="noopener noreferrer"><img src={Images.fbW} alt="" /></a></li>
                <li><a href="https://instagram.com/summerfiesta_ng/" target="_blank" rel="noopener noreferrer"><img src={Images.instagramW} alt="" /></a></li>
              </ul>
            </div>
          </div>
          <section className="section home" id="home">

            <img src={logo} alt="Summer Fiesta Logo" className="logo" />

            <Timer deadline="Aug 18, 2018" />

            <img src={date} alt="Event date" className="date" />

            <div className="buttons">
              <a className="ticket">GET TICKETS</a>
              <a href="https://summerfiesta.typeform.com/to/uWJsye" target="_blank" rel="noopener noreferrer" className="stall">BOOK A STALL</a>
            </div>

          </section>
          <section className="section poster"></section>

          {/* <section className="section line-up">
            <h3 className="section-title">Line Up</h3>
            <div className="container">
              {
                this.state.lineUp.map((artist, index) =>
                  <div className="artist-card" index={index}>
                    <div className="img-container">
                      <div className="img-overlay"></div>
                      <img src={artist.image} alt={`Picture of ${artist.name}`} />
                    </div>
                    <div className="dots">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div className="info">
                      <p>{artist.name}</p>
                    </div>
                  </div>
                )
              }
            </div>
          </section> */}
          <section className="section partners" id="partners">

            <h3 className="section-title">Partners</h3>
            <div className="container">

              {
                this.state.partners.map((partner, index) =>
                  <div className="partner-card" key={index}>
                    <div className="img-container">
                      <img src={partner.image} alt={partner.name} />
                    </div>
                    <div className="footer">
                      <p>{partner.name}</p>
                    </div>
                  </div>
                )
              }

              <div className="subscribe m">
                <p className="section-title">Subscribe</p>
                <small>get all the latest updates about Summer Fiesta</small>
                {this._renderInput()}
              </div>
            </div>

          </section>

          <section className="section vendors" id="vendors">
            <h3 className="section-title">Vendors</h3>
            <div className="container">

              {
                this.state.vendors.map((vendor, index) =>
                  <div className="vendor-container" key={index}>
                    <div className="img">
                      <img src={vendor.image} alt="" />
                    </div>
                    <div className="info">
                      <h3 className="vendor-name">{vendor.name}</h3>
                      <ul className="desc">
                        {
                          vendor.menu.map((menu, index) =>
                            <li key={index}>{menu}</li>
                          )
                        }
                      </ul>
                    </div>
                  </div>
                )
              }
            </div>
          </section>

          <section className="section media" id="media">
            <h3 className="section-title">Media</h3>
            <div className="container">
              {
                this.state.media.map((media, index) =>
                  (
                    <div className="media-card" key={index}>
                      <img src={media.image} alt="" />
                    </div>
                  )
                )
              }
            </div>
          </section>

          <section className="section sf17" id="sf17">
            <h3 className="section-title">Summer Fiesta 17'</h3>
            <div className="container">
              <InstagramEmbed
                url='https://instagram.com/p/BYENQPxFm4r/'
                maxWidth={320}
                hideCaption
                containerTagName='div'
                protocol=''
                onLoading={() => { }}
                onSuccess={() => { }}
                onAfterRender={() => { }}
                onFailure={() => { }}
              />

              <InstagramEmbed
                url='https://instagram.com/p/BX_V_L7lrhC/'
                maxWidth={320}
                hideCaption
                containerTagName='div'
                protocol=''
                onLoading={() => { }}
                onSuccess={() => { }}
                onAfterRender={() => { }}
                onFailure={() => { }}
              />

              <InstagramEmbed
                url='https://instagram.com/p/BglQV8hj6FT/'
                maxWidth={320}
                hideCaption
                containerTagName='div'
                protocol=''
                onLoading={() => { }}
                onSuccess={() => { }}
                onAfterRender={() => { }}
                onFailure={() => { }}
              />
            </div>
            <div className="made-by">
              Made with ♥ by <a href="https://twitter.com/todywa" target="_blank" rel="noopener noreferrer">Tody</a>
            </div>
          </section>

        </main>
      </div >
    );
  }
}

export default App;
