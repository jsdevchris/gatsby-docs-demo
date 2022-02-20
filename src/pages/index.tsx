import * as React from 'react'
import { Link } from 'gatsby'
import { Button } from 'antd'
import { GithubOutlined, TwitterOutlined } from '@ant-design/icons'

const IndexPage = () => {
  return (
    <div align="center" style={{ padding: 80 }}>
      <p
        style={{
          color: 'cornflowerblue',
          fontSize: 50,
          fontWeight: 'bold',
        }}
      >
        Gatsby app deployed on both <a href='https://gatsby-docs-on-vercel.vercel.app/'>Vercel</a> and <a href='https://gatsbydocsdemo.gatsbyjs.io/'>gatsby</a>
      </p>
      <h2>Same code base and repo, two deployments.</h2>
      <a href='https://github.com/heythereimchris/gatsby-docs-demo'>Github Repo</a>


      <br />
      <Button.Group size="large">
        <Button
          size="large"
          icon={<TwitterOutlined />}
          href="https://gatsby-docs-on-vercel.vercel.app/"
          target="_blank"
        >
          Vercel
        </Button>
        <Button
          size="large"
          icon={<GithubOutlined />}
          href="https://gatsbydocsdemo.gatsbyjs.io/"
          target="_blank"
        >
          Gatsby
        </Button>

        <Button type="primary" size="large">
          <Link to="/docs/template/get-started/introduction">Get Started</Link>
        </Button>
      </Button.Group>
    </div>
  )
}

export default IndexPage
