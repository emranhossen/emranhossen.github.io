import Layout from "../components/Layout"
import { MDXProvider } from '@mdx-js/react'
import Highlight, { defaultProps } from "prism-react-renderer"
import './../styles/globals.css'

const components = {
  pre: props => {
    const className = props.children.props.className || ""
    const matches = className.match(/language-(?<lang>.*)/)
    return (
      <Highlight {...defaultProps}
        code={props.children.props.children.trim()}
        language={
          matches && matches.groups && matches.groups.lang
          ? matches.groups.lang : ""
        }
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    )
  },
}

function MyApp({ Component, pageProps }) {
  return <Layout pageTitle="Blog" description="My Personal Blog">

    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  </Layout>
}

export default MyApp
