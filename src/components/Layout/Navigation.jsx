import React from "react"
import Link from 'gatsby-link'
import styled from 'styled-components'

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: ${props => props.theme.brand};
  
  .nav-link {
    font-size: 1.6rem;
    margin: 5px;
    padding: 10px;
    font-weight: 200;
    color: white;
    transition: 0.2s background ease-in;
  }
  
  .nav-link:hover {
    background: rgba(0,0,0,0.3);
  }
  
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    section {
      margin-bottom: 20px;
    }
    
    span {
      display: none;
    }
    
  }
`

class Navigation extends React.Component {

    render() {
        return (
            <NavContainer>
                <section>
                    <Link className='nav-link' to='/'> Home </Link>
                    <Link className='nav-link' to='/lesson-one'> Developers </Link>
                </section>
            </NavContainer>
        )
    }
}

export default Navigation