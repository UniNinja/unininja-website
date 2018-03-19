import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"

import whiteLogo from "../../static/logos/logo-white.svg"

import SEO from "../components/SEO/SEO"
import config from "../../data/SiteConfig"
import CtaButton from '../components/CtaButton'
import Navigation from '../components/Layout/Navigation'

class Index extends React.Component {

    render() {
        const postEdges = this.props.data.allMarkdownRemark.edges;
        return (
            <div className="index-container">
                <Helmet title={config.siteTitle}/>
                <SEO postEdges={postEdges}/>
                <main>
                    <IndexHeadContainer>
                        <Navigation/>
                        <Hero>
                            <img
                                alt="UniNinja logo"
                                src={whiteLogo}
                                style={{
                                    maxWidth: "80vw",
                                    width: "600px",
                                }}/>
                        </Hero>
                    </IndexHeadContainer>
                    <BodyContainer>
                        <h2>Under Development</h2>
                        <p>UniNinja is currently under development. Check back here regularly for more updates. When it is released, UniNinja will be available on iOS and Android devices straight away. If you are a developer, you can check out our API documentation below:</p>
                        <CtaButton to={'/lesson-one'}>API Documentation</CtaButton>
                    </BodyContainer>
                </main>
            </div>
        );
    }
}

export default Index;

const IndexHeadContainer = styled.div`
  background: ${props => props.theme.brand};
  padding: ${props => props.theme.sitePadding};
  text-align: center;
`

const Hero = styled.div`
  padding: 50px 0;
  & > h1 {
    font-weight: 600;
  }
  clip-mask: polygon(0 0, 100% 0, 100% 90%, 0 100%);
`

const BodyContainer = styled.div`
  padding: ${props => props.theme.sitePadding};
  max-width: ${props => props.theme.contentWidthLaptop};
  margin: 0 auto;
`


/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges { 
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
