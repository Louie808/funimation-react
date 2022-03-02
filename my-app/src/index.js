import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Image, Menu, List, Item, Icon, Button, Dropdown, Grid } from 'semantic-ui-react';

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
    return (
        <Menu borderless className='navbar'>
          <Container>
            <Image item src="https://static.funimation.com/static/img/common/funimation-logo.svg" alt='Funimation Logo'/>
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
              <Button color='yellow' style={{ color: 'black', fontWeight: 'bolder' }}>TRY PREMIUM PLUS</Button>
            </Menu.Item>
            <Menu.Item><a href='#'>LOGIN</a></Menu.Item>
          </Container>
        </Menu>
    );
  }
}

class TopMiddle extends React.Component {
  render() {
    return (
        <div className='middle-top'>
          <Image className='' src="https://derf9v1xhwwx1.cloudfront.net/image/upload/q_60/cste/303b37dc-4ec7-48a4-9eb0-355cb5eee672.png" alt='Hero-Spotlight'/>
        </div>
    );
  }
}

class MiddleMiddle extends React.Component {
  render() {
    return (
        <div className='middle-middle'>
        </div>
    );
  }
}

class BottomMiddle extends React.Component {
  render() {
    return (
        <div className='middle-bottom'></div>
    );
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <div className='middle'>
          <TopMiddle/>
          <MiddleMiddle/>
          <BottomMiddle/>
        </div>
    );
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div className='footer-background'>
          <Container style={{width: "90%"}}>
            <Grid  columns={'two'}>
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
                <Grid.Row style={{paddingLeft: '20%'}} >
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

ReactDOM.render(<Funimation/>, document.getElementById('root'));