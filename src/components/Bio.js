import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.gif'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Kyle Mathews`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          A blog by <strong>Ruben Thys</strong> about living in London and working as an intern at Enepath.{' '}
          <a href="https://twitter.com/rubenthys22">
            You can follow me on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
