const style = {
  backgroundImage: {
    backgroundColor: 'hotpink',
    height : '100vh',
    backgroundImage: 'url(https://image.ibb.co/d5Dc0U/clouds_fog_forest_9754.jpg)',
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
