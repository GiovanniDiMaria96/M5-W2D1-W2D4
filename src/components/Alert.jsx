import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import './Main.css';

function MyAlert() {
    const [show, setShow] = useState(true);

    return (
      <>
        <Alert show={show} variant="info">
          <Alert.Heading>Welcome to my first React-app</Alert.Heading>
          <p>
          React-Bootstrap is a complete re-implementation of the Bootstrap components using React. If you have React setup and React-Bootstrap installed, you have everything you need.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-info">
              Close me
            </Button>
          </div>
        </Alert>
  
        {!show && <Button onClick={() => setShow(true)} className='m' variant="outline-info">Welcome</Button>}
      </>
    );
}

export default MyAlert;