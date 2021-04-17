import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Poem from "../components/poem"

export default function Poems({ data }) {
  const poems = data.allContentfulPoem.nodes

  return (
    <Layout>
      <h2>- Poems -</h2>
      <div className="poems">
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
                <div key={p.id} dangerouslySetInnerHTML={{ __html: p.html }} />
              ))}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query AllPoems {
    allContentfulPoem {
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
  }
`
