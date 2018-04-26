/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')
const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock

const siteConfig = require(process.cwd() + '/siteConfig.js')

function imgUrl (img) {
  return siteConfig.baseUrl + 'img/' + img
}

function docUrl (doc, language) {
  const baseUrl = siteConfig.baseUrl
  return baseUrl + 'docs/' + doc + '.html'
}

class Button extends React.Component {
  render () {
    return (
      <div className='pluginWrapper buttonWrapper'>
        <a className='button' href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    )
  }
}

Button.defaultProps = {
  target: '_self'
}

const SplashContainer = props => (
  <div className='homeContainer'>
    <div className='homeSplashFade'>
      <div className='wrapper homeWrapper'>{props.children}</div>
    </div>
  </div>
)

const PromoSection = props => (
  <div className='section promoSection'>
    <div className='promoRow'>
      <div className='pluginRowBlock'>{props.children}</div>
    </div>
  </div>
)

class HomeSplash extends React.Component {
  render () {
    const language = this.props.language
    return (
      <SplashContainer>
        <img className='unininja-logo' src={imgUrl('unininja.png')} alt='UniNinja Logo' />
        <div className='inner'>
          <PromoSection>
            <Button href='#install'>Get it now</Button>
            <Button href={docUrl('introduction')}>Use our API</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    )
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align='center' contents={props.children} layout={props.layout} />
  </Container>
)

const Install = props => (
  <Block layout='fourColumn'>
    {[
      {
        image: imgUrl('vendors/apple.png'),
        imageAlign: 'top',
        title: 'iOS'
      },
      {
        image: imgUrl('vendors/android.png'),
        imageAlign: 'top',
        title: 'Android'
      }
    ]}
  </Block>
)

class Index extends React.Component {
  render () {
    let language = this.props.language || ''

    return (
      <div>
        <HomeSplash language={language} />
        <div className='mainContainer'>
          <div id='install'>
            <Install />
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Index
