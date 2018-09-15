const style = {
  backgroundImage: {
    backgroundColor: '#FFF',
    height : '60vh',
    backgroundImage: 'url(https://image.ibb.co/mnsabe/skog.jpg)',
    backgroundSize: 'cover',
    textAlign: 'center'
  }
}

function BackgroundImage(props) {
  return (
    <div style={style.backgroundImage}>
      {props.children}
    </div>
  );
}

export default BackgroundImage;
