import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import Prism from 'prism-react-renderer/prism'
import theme from 'prism-react-renderer/themes/github'

const Code = ({ code, language, filename }) => {
  (typeof global !== "undefined" ? global : window).Prism = Prism

  const languages = [
    "kotlin", "csharp", "elixir", "clojure", "erlang"
  ]
  languages.forEach(lang => require(`prismjs/components/prism-${lang}`))

  return (
    <Highlight {...defaultProps} theme={theme} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${className} ${language === undefined ? 'pt-4' : 'pt-8'} ${filename === undefined ? 'pb-4' : 'pb-8'} my-4 px-4 overflow-x-auto bg-yellow-50 text-left rounded-md shadow-md relative`} >

          {language &&
            <span className="absolute top-0 px-2 text-center text-gray-600 bg-yellow-200 select-none left-6 rounded-b-md">
              {language.toUpperCase()}
            </span>
          }

          {filename &&
            <span className="absolute bottom-0 px-2 font-mono text-center text-gray-600 bg-yellow-200 select-none left-6 rounded-t-md">
              {filename}
            </span>
          }

          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })} className="table-row">
              <span className="table-cell pr-2 text-right opacity-50 select-none">{i + 1}</span>
              <span className="table-cell">
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </span>
            </div>
          ))}

        </pre>
      )}
    </Highlight>
  )
}

export const Pre = (props) => {
  let language = props.className?.split("-").pop()
  let code = props.children.trim()
  let filename = props.filename
  return <Code code={code} language={language} filename={filename} />
}

export default Code