/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

class Footer extends React.Component {
  docUrl (doc) {
    const baseUrl = this.props.config.baseUrl
    return baseUrl + 'docs/' + doc
  }

  pageUrl (doc, language) {
    const baseUrl = this.props.config.baseUrl
    return baseUrl + (language ? language + '/' : '') + doc
  }

  render () {
    return (
      <footer className='nav-footer' id='footer'>
        <section className='sitemap'>
          <div>
            <h5>Keep in touch</h5>
            <a href='https://twitter.com/unininjaapp'>Twitter</a>
          </div>
          <div>
            <h5>Developers</h5>
            <a href={this.docUrl('introduction.html')}>
              Getting Started
            </a>
            <a href={this.docUrl('authorisation.html')}>
              Guides
            </a>
            <a href={this.docUrl('schema.html')}>
              API Reference
            </a>
          </div>
        </section>
        <section className='copyright'>{this.props.config.copyright}</section>
      </footer>
    )
  }
}

module.exports = Footer
