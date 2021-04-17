import React from "react"
import "../styles/global.scss"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Carousel from "../components/carousel"
import { graphql } from "gatsby"
import Poem from "../components/poem"

export default function Home({ data }) {
  const poems = data.allContentfulPoem.nodes
  const mainPageLeft = data.allContentfulMainpageLeftDescriptionTextNode.nodes
  const mainPageRight =
    data.allContentfulMainpageRightDescription1TextNode.nodes

  return (
    <Layout>
      <div className="container">
        <section className="first-section">
          {mainPageLeft.map(c => (
            <article
              key={c.childMarkdownRemark.id}
              dangerouslySetInnerHTML={{
                __html: c.childMarkdownRemark.html,
              }}
            ></article>
          ))}
          <StaticImage
            src="../images/jess-bailey-cvUIv9j5wDg-unsplash.jpg"
            alt=""
            width={1448}
            height={620}
          />
          {/* Photo by <a href="https://unsplash.com/@jessbaileydesigns?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jess Bailey</a> on <a href="/s/photos/writing?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}
        </section>
        <section className="second-section">
          <StaticImage
            src="../images/debby-hudson-vDUIhgASz6c-unsplash.jpg"
            alt=""
            width={862}
            height={551}
          />
          {/* Photo by <a href="https://unsplash.com/@hudsoncrafted?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Debby Hudson</a> on <a href="/collections/1809671/books%2C-desktop%2C-study%2C-office?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}

          {mainPageRight.map(c => (
            <article
              key={c.childMarkdownRemark.id}
              dangerouslySetInnerHTML={{
                __html: c.childMarkdownRemark.html,
              }}
            ></article>
          ))}
        </section>
        <section className="third-section">
          <h2>- Latest -</h2>
          <Carousel>
            {poems.map(p => {
              let timestamp = Math.round(p.createdAt / 86400000)
              if (timestamp === 0) {
                timestamp = "today"
              } else {
                timestamp = `${timestamp} days ago`
              }
              return (
                <Poem
                  key={p.id}
                  createdAt={timestamp}
                  content={p.poemContent.childrenMarkdownRemark.map(p => (
                    <div
                      key={p.id}
                      dangerouslySetInnerHTML={{ __html: p.html }}
                    />
                  ))}
                />
              )
            })}
          </Carousel>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query LatestPoems {
    allContentfulPoem(limit: 5, sort: { fields: createdAt, order: DESC }) {
      nodes {
        title
        id
        createdAt(difference: "$fromNow")
        poemContent {
          childrenMarkdownRemark {
            html
            id
          }
        }
      }
    }
    allContentfulMainpageLeftDescriptionTextNode {
      nodes {
        childMarkdownRemark {
          html
          id
        }
      }
    }
    allContentfulMainpageRightDescription1TextNode {
      nodes {
        childMarkdownRemark {
          html
          id
        }
      }
    }
  }
`
