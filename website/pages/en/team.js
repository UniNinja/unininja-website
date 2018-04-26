/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')
const Container = CompLibrary.Container

const siteConfig = require(process.cwd() + '/siteConfig.js')

class TeamMembers extends React.Component {
  render () {
    const teamMembers = this.props.teamMembers
    const teamMemberTiles = teamMembers.map((teamMember, i) => (
      <div className='col-3' key={i}>
        <a href={teamMember.imageLink}><img src={teamMember.image} alt={teamMember.imageAlt} className='team-member-headshot' /></a>
        <h2>{teamMember.name}</h2>
        <p>{teamMember.content}</p>
      </div>
    ))
    return (
      <div className='people-container'>
        {teamMemberTiles}
      </div>
    )
  }
}

class Help extends React.Component {
  render () {
    const teamMembers = [
      {
        image: siteConfig.baseUrl + 'img/team/dan-arthur.png',
        imageAlt: 'Dan Arthur',
        imageLink: 'https://github.com/DanielArthurUK',
        content: 'Dan is the UniNinja project manager, and also specialises in DevOps and Continuous Deployment. He is responsible for ensuring that our services are always running for our users.',
        name: 'Dan Arthur'
      },
      {
        image: siteConfig.baseUrl + 'img/team/harry-collins.jpg',
        imageAlt: 'Harry Collins',
        imageLink: 'https://github.com/harrygcollins',
        content: 'Harry is our API guy. He and Dan work together to ensure our API functions well and produces a good service to our mobile application and other developers.',
        name: 'Harry Collins'
      },
      {
        image: siteConfig.baseUrl + 'img/team/mark-paice.jpg',
        imageAlt: 'Mark Paice',
        imageLink: 'https://github.com/msp26ssx',
        content: 'Mark is a full-stack software developer that assists both the server-side and client-side teams in their programming phases. He also works closely with Alex to ensure our code is clear, concise and correct.',
        name: 'Mark Paice'
      },
      {
        image: siteConfig.baseUrl + 'img/team/alex-tang.png',
        imageAlt: 'Alex Tang',
        imageLink: 'https://github.com/Tang-1996',
        content: 'Alex is responsible for maintaining our testing strategy across all of our services. He works closely with both the server-side and client-side teams to ensure we deliver services that work properly.',
        name: 'Alex Tang'
      },
      {
        image: siteConfig.baseUrl + 'img/team/loic-verrall.jpg',
        imageAlt: 'Loic Verrall',
        imageLink: 'https://github.com/LoicVerrall',
        content: 'Loic is our mobile maestro. He is responsible for maintaining our cross-platform mobile codebase and ensuring that both our iOS and Android users have a good experience using UniNinja.',
        name: 'Loic Verrall'
      }
    ]

    return (
      <div className='docMainWrapper wrapper'>
        <Container className='mainContainer documentContainer postContainer'>
          <div className='post'>
            <header className='postHeader'>
              <h2>Meet the Team</h2>
            </header>
            <p>UniNinja is built and maintained by a small, dedicated team.</p>
            <TeamMembers teamMembers={teamMembers} />
          </div>
        </Container>
      </div>
    )
  }
}

module.exports = Help
