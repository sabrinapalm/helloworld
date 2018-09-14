import { Fragment } from 'react';
import Link from 'next/link';

const style = {
  card: {
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    width: 300
  },
  container: {
    padding: '10px'
  },
  titleStyle: {

  },
  buttonStyle: {
    fontSize: '25px',
    marginRight: 10,
    // padding: '10px 24px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: 'transparent',
  }
}

export default (props) => (
  <Fragment>
  <div style={style.card}>
    <img
      src="https://image.ibb.co/ht6KZp/Getty_Images_456127449_2b37e775bab8.jpg"
      alt="Avatar"
      style={{ width: '100%' }}
    />
    <div style={style.container}>
      <p><b>My awsome trip to Gothenburg</b></p>
      <p>Eat and run on the roads in Gothenburg</p>
      <p>By. Sabrina Palm</p>
      <Link href='/'>
        <button style={style.buttonStyle}>&#x2661;</button>
      </Link>
    </div>
</div>
</Fragment>
)
