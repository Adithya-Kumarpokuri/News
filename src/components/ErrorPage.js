import { Link } from 'react-router-dom';

import ErrorImg from './404.png';

export default function ErrorPage() {

  return (
    <div className="container"  >
      <div
        className="main-content"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: "90px"
        }}
      >
        <img src={ErrorImg} alt="Error" style={{ height: '350px' }} />
        <h2 style={{ textAlign: 'center' }}>
          404 <br />
          Error Not Found!
        </h2>
        <p>
          Go to <Link to="/">Home</Link>
        </p>
      </div>
    </div>
  );
}