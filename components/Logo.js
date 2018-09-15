const logo = 'https://image.ibb.co/dr1p0U/logowhitebig.png';

const style = {
  imgStyle: {
    margin: '335px auto',
    marginBottom: '0px',
  }
}

function Logo(props) {
  return (
    <div>
      <img style={style.imgStyle} src={logo} alt="Logo" />
    </div>
  );
}

export default Logo;
