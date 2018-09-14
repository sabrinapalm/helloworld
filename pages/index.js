import Link from 'next/link'

const logo = 'https://image.ibb.co/igxefU/logo.png';

const style = {
  backgroundImage: {
    backgroundColor: 'hotpink',
    height : '100vh',
    backgroundImage: 'url(https://image.ibb.co/d5Dc0U/clouds_fog_forest_9754.jpg)',
    backgroundSize: 'cover',
    textAlign: 'center'
  },
  imgStyle: {
    margin: '300px auto',
    marginBottom: '0px',
  },
  textStyle: {
    fontFamily:'Helvetica',
    fontWeight: 'bold',
    color: 'white',
    fontSize: '16px',
    letterSpacing: '1px'
  },
  buttonStyle: {
    width: 200,
    marginTop: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 5,
    border: '2px solid white',
    borderRadius: 4,
    cursor: 'pointer'
  },
  buttonText: {
    fontFamily:'Helvetica',
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: '1px'
  }
}

export default (props) => (
  <div style={style.backgroundImage}>
      <img style={style.imgStyle} src={logo} alt="Logo" />
      <br />
      <p style={style.textStyle}>{'Johan Augustsson & Sabrina Palm'.toUpperCase()}</p>
      {/* <Link href='/about'><a>ABOUT US</a></Link> */}
      <button style={style.buttonStyle}>
        <p style={style.buttonText}>ADD YOUR TRIP</p>
      </button>
  </div>
)
