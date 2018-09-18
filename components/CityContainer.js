const style = {
  container: {
    backgroundColor: 'white',
    padding: 40,
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  }
}

function CityContainer(props) {
  return (
    <div style={style.container}>
      {props.children}
    </div>
  );
}

export default CityContainer;
