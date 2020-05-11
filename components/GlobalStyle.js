import React from 'react'
import sanitize from '../lib/sanitize'
import constants from './constants'

const css = `
    /* Reset CSS */
    ${sanitize}

    /* Fix for Prism syntax highlight styles */
    .prism-code {
        overflow-x: auto;
    }
    code {
        padding: 3px 8px;
        background: ${constants.bg};
        color: ${constants.fg};
        border-radius: 3px;
        white-space: nowrap;
    }

    /* Set global font */
    * {
        font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
        line-height: 1.8em;
    }

    .dl-horizontal dt { 
        float: left;
        text-align: right;
        padding-right: 0.5rem;
        width: 30%;
    }
        
    .dl-horizontal dd { 
        margin-left: 30%;
        font-weight: bold;
    }
    .dl-horizontal dd:after {
        content: "";
        display: block;
        clear: both;
    }

`

const GlobalStyle = () => (
  <style dangerouslySetInnerHTML={{ __html: css }} />
)

export default GlobalStyle
