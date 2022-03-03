import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Image, Menu, List, Item, Icon, Button, Dropdown, Grid, Sticky } from 'semantic-ui-react';

const red = { backgroundColor: 'red', }
const yellow = { backgroundColor: 'yellow'}

class PromoBar extends React.Component {
  render() {
    const ItemAStyle = {
      color: '#410099',
      fontWeight: 'bolder',
    }
    return (
        <Container textAlign='center'>
          <a href="#">
            <div className="promo">
              <p>HOW A REALIST HERO REBUILT THE KINGDOM PART 2 - START WATCHING WITH A 14 DAY FREE TRIAL</p>
            </div>
          </a>
        </Container>
    );
  }
}

class TopMenu extends React.Component {
  render() {
    const premiumStyle = {
      color: 'black',
      fontWeight: 'bolder',
    }
    return (

        // <Sticky>
        <Menu borderless className='navbar'>
          <Container>
            <Menu.Item>
              <Image src="https://static.funimation.com/static/img/common/funimation-logo.svg" alt='Funimation Logo'/>
            </Menu.Item>
            <Dropdown item text='STREAM'>
              <Dropdown.Menu>
                <Dropdown.Item><a href='#'>ALL TITLES</a></Dropdown.Item>
                <Dropdown.Item><a href='#'>CURRENT SEASON</a></Dropdown.Item>
                <Dropdown.Item><a href='#'>SCHEDULE</a></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text='DISCOVER'>
              <Dropdown.Menu>
                <Dropdown.Item><a href='#'>GAMES</a></Dropdown.Item>
                <Dropdown.Item><a href='#'>NEWS</a></Dropdown.Item>
                <Dropdown.Item><a href='#'>THEATRICAL</a></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text='SHOP'>
              <Dropdown.Menu>
                <Dropdown.Item><a href='#'>HOME VIDEO</a></Dropdown.Item>
                <Dropdown.Item><a href='#'>PRE-ORDERS</a></Dropdown.Item>
                <Dropdown.Item><a href='#'>FIGURES & COLLECTIBLES</a></Dropdown.Item>
                <Dropdown.Item><a href='#'>ACCESSORIES</a></Dropdown.Item>
                <Dropdown.Item><a href='#'>APPAREL</a></Dropdown.Item>
                <Dropdown.Item><a href='#'>HOME GOODS</a></Dropdown.Item>
                <Dropdown.Item><a href='#'>GIFT CARDS</a></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item position='right'>
              <Button color='yellow' style={premiumStyle}>TRY PREMIUM PLUS</Button>
            </Menu.Item>
            <Menu.Item><a href='#'>LOGIN</a></Menu.Item>
          </Container>
        </Menu>
        // </Sticky>
    );
  }
}

class TopMiddle extends React.Component {
  render() {
    const contentHeader = { paddingTop: '10%', color: 'white', fontSize: '40px', fontWeight: '000' }
    const contentDescriptionStyle = { paddingTop: '5%', marginLeft: '8%', fontWeight: '600', }
    const learnMore = { color: 'white', background: '#00A5DF', fontWeight: 'boldest', padding: '15px 50px', }
    const rightContent = {
      backgroundImage: 'url(https://derf9v1xhwwx1.cloudfront.net/image/upload/q_60/cste/303b37dc-4ec7-48a4-9eb0-355cb5eee672.png)',
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      minHeight: '10em',
      height: '36em',
    }
    return (
        <Grid container columns={'equal'}>
          <Grid.Column floated={'left'} textAlign={'left'} style={contentDescriptionStyle}>
            <h1 style={contentHeader}>TAKING ANIME TO THE NEXT LEVEL</h1>
            <p>Funimation is officially moving to Crunchyroll! The ultimate anime experience awaits</p>
            <Button size={'medium'} content='LEARN MORE' style={learnMore}/>
          </Grid.Column>
          <Grid.Column floated={'right'} style={rightContent}>
            {/*<Image  src='https://derf9v1xhwwx1.cloudfront.net/image/upload/q_60/cste/303b37dc-4ec7-48a4-9eb0-355cb5eee672.png' alt="Hero Spotlight"/>*/}
          </Grid.Column>
        </Grid>
    );
  }
}

class MiddleMiddle extends React.Component {
  render() {
    const image = [
      'https://derf9v1xhwwx1.cloudfront.net/image/upload/c_fill,q_80,w_265,h_397/oth/FunimationStoreFront/1959560/c2b6fc8f-7a34-4960-9b1f-ac6d8aa49c3d/1959560_DSL_Keyart_7bdd15b7-fdc9-4aa8-a282-7830f6d96431.jpg',
      'https://derf9v1xhwwx1.cloudfront.net/image/upload/c_fill,q_80,w_265,h_397/oth/FunimationStoreFront/1287817/Portuguese(Brazil)/1287817_Portuguese(Brazil)_ShowKeyart_9cdb6bf7-0600-41b6-858d-82f5816f856e.jpg',
      'https://derf9v1xhwwx1.cloudfront.net/image/upload/c_fill,q_80,w_265,h_397/oth/FunimationStoreFront/2184183/Japanese/2184183_Japanese_ShowKeyart_94d9201b-3e75-ea11-82a8-dd291e252010.jpg',
      'https://derf9v1xhwwx1.cloudfront.net/image/upload/c_fill,q_80,w_265,h_397/oth/FunimationStoreFront/2022003/Latvian/2022003_Latvian_ShowKeyart_27128122-9083-4160-8025-70316acc8cad.jpg',
      'https://derf9v1xhwwx1.cloudfront.net/image/upload/c_fill,q_80,w_265,h_397/oth/FunimationStoreFront/100022852/8d51ff2c-557d-410f-be94-3458756cf90b/100022852_POW_Keyart_d500d394-ff18-4579-9a38-12f63e00afa9.jpg',
      'https://derf9v1xhwwx1.cloudfront.net/image/upload/c_fill,q_80,w_265,h_397/oth/FunimationStoreFront/100005193/07a4afb1-b3c6-4091-aee1-ea99d4326c3f/100005193_RBK_Keyart_da2cf364-146d-47f7-ba87-130a1e5ce1dc.jpg',
    ];
    const imageAlt = [
      'Demon Slayer: Entertainment Arc',
      'Attack on Titan: Final Season Part II',
      'One Piece',
      'Arifureta',
      'She Professed Herself Pupil of Wise Mane',
      'How a Realist Rebuilt the Kingdom',
    ];
    const white = { color: 'white' };
    return (
        <Container fluid style={ {paddingLeft: '7%'}}>
          <section className='anime-list'>
            <Header style={white} as='h1' content='Winter2022 Season'/>
              <List horizontal compact className='anime-image-list'>
                <List.Item>
                  <Image className='anime-list-image' src={image[0]} alt={imageAlt[0]}/>
                </List.Item>
                <List.Item>
                  <Image className='anime-list-image' src={image[1]} alt={'alternate'}/>
                </List.Item>
                <List.Item>
                  <Image className='anime-list-image' src={image[2]} alt='Alternate'/>
                </List.Item>
                <List.Item>
                  <Image className='anime-list-image' src={image[3]} alt={`${imageAlt[4]}`}/>
                </List.Item>
                <List.Item>
                  <Image className='anime-list-image' src={image[4]} alt={imageAlt[4].toString()}/>
                </List.Item>
                <List.Item>
                  <Image className='anime-list-image' src={image[5]} /*no alt will not show a missing image*//>
                </List.Item>
              </List>
          </section>
          <section className='anime-list'>
            <Header style={white} as='h1' content='Winter2022 Season'/>
            <List horizontal compact className='anime-image-list'>
              <List.Item>
                <Image className='anime-list-image' src={image[0]} alt={imageAlt[0]}/>
              </List.Item>
              <List.Item>
                <Image className='anime-list-image' src={image[1]} alt={'alternate'}/>
              </List.Item>
              <List.Item>
                <Image className='anime-list-image' src={image[2]} alt='Alternate'/>
              </List.Item>
              <List.Item>
                <Image className='anime-list-image' src={image[3]} alt={`${imageAlt[4]}`}/>
              </List.Item>
              <List.Item>
                <Image className='anime-list-image' src={image[4]} alt={imageAlt[4].toString()}/>
              </List.Item>
              <List.Item>
                <Image className='anime-list-image' src={image[5]} /*no alt will not show a missing image*//>
              </List.Item>
            </List>
          </section>
          <section className='anime-list'>
            <Header style={white} as='h1' content='Winter2022 Season'/>
            <List horizontal compact className='anime-image-list'>
              <List.Item>
                <Image className='anime-list-image' src={image[0]} alt={imageAlt[0]}/>
              </List.Item>
              <List.Item>
                <Image className='anime-list-image' src={image[1]} alt={'alternate'}/>
              </List.Item>
              <List.Item>
                <Image className='anime-list-image' src={image[2]} alt='Alternate'/>
              </List.Item>
              <List.Item>
                <Image className='anime-list-image' src={image[3]} alt={`${imageAlt[4]}`}/>
              </List.Item>
              <List.Item>
                <Image className='anime-list-image' src={image[4]} alt={imageAlt[4].toString()}/>
              </List.Item>
              <List.Item>
                <Image className='anime-list-image' src={image[5]} /*no alt will not show a missing image*//>
              </List.Item>
            </List>
          </section>
        </Container>
    );
  }
}

class BottomMiddle extends React.Component {
  render() {

    return (
        <Container className='trial' textAlign={'center'}>
          <h1 className='trialHeader'>Stream Ad-Free Anime with <br/> Premium Plus for $7.99 a month</h1>
          <p className='trialContent'>Enjoy over 10,000 episodes and movies from our huge library of subs and dubs, featuring a deep
            catalog of big hits, fan favorites and all-time classics, as well as the latest shows out of Japan.</p>
          <Button color={'yellow'} size={'large'} content='START MY FREE TRIAL'/>
        </Container>
    );
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <Container fluid>
          <Grid className='middle-menu'>
            <Grid.Row className='middle-top'>
              <TopMiddle/>
            </Grid.Row>
            <Grid.Row className='middle-middle'>
              <MiddleMiddle/>
            </Grid.Row>
            <Grid.Row className='middle-bottom'>
              <BottomMiddle/>
            </Grid.Row>
          </Grid>
        </Container>
    );
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div className='footer-background'>
          <Container style={{ width: "90%" }}>
            <Grid columns={'two'}>
              <Grid.Column textAlign='left'>
                <Grid.Row>
                  <List link className='footer-navigation'>
                    <List.Item as='a'>ABOUT FUNIMATION</List.Item>
                    <List.Item as='a'>CUSTOMER SUPPORT</List.Item>
                    <List.Item as='a'>TERMS OF USE</List.Item>
                    <List.Item as='a'>TERMS OF SALE</List.Item>
                    <List.Item as='a'>PRIVACY POLICY</List.Item>
                    <List.Item as='a'>DO NOT SELL MY PERSONAL INFORMATION</List.Item>
                    <List.Item as='a'>CAREERS</List.Item>
                  </List>
                </Grid.Row>
                <Grid.Row>
                  <Image style={{ marginTop: '2em' }} src="https://derf9v1xhwwx1.cloudfront.net/image/upload/q_60/cste/2b6e796d-2275-41a6-8b90-5d2b3f89f680.png" alt="Sony Pictures"/>
                </Grid.Row>
              </Grid.Column>
              <Grid.Column className='social-media'>
                <Grid.Row style={{ paddingLeft: '20%' }}>
                  <List horizontal relaxed>
                    <List.Item><Image src="https://static-assets.prd.funimation.com/Social_Icon_SVGs/facebook.svg" alt="facebook"/></List.Item>
                    <List.Item><Image src="https://static-assets.prd.funimation.com/Social_Icon_SVGs/youtube.svg" alt="youtube"/></List.Item>
                    <List.Item><Image src="https://static-assets.prd.funimation.com/Social_Icon_SVGs/instagram.svg" alt="instagram"/></List.Item>
                    <List.Item><Image src="https://static-assets.prd.funimation.com/Social_Icon_SVGs/pinterest.svg" alt="pinterest"/></List.Item>
                    <List.Item><Image src="https://static-assets.prd.funimation.com/Social_Icon_SVGs/discord.svg" alt="discord"/></List.Item>
                    <List.Item><Image src="https://static-assets.prd.funimation.com/Social_Icon_SVGs/tiktok.svg" alt="tiktok"/></List.Item>
                  </List>
                </Grid.Row>
              </Grid.Column>
            </Grid>
          </Container>
        </div>
    );
  }
}

class Funimation extends React.Component {

  render() {
    return (
        <div>
          <PromoBar/>
          <TopMenu/>
          <MiddleMenu/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(
    <Funimation/>
    , document.getElementById('root'));