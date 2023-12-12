import React from 'react'

function Footer() {
  const footerStyle = {
    backgroundColor: '	#dcdcdc',
    color: 'white',
    padding: '5px',
    textAlign: 'center',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  }

  return (
    <div style={footerStyle} className="Footer">
      &copy; 2023 Joongbu University YPJ Team.
    </div>
  )
}

export default Footer
