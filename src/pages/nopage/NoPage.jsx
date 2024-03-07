import React from 'react';

const NoPage = () => {
  return (
    <section style={{ padding: '40px 0', background: '#fff', fontFamily: 'Arvo, serif' }}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1 text-center">
              <div style={{ 
                backgroundImage: 'url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)',
                height: '400px',
                backgroundPosition: 'center' 
              }}>
                <h1 style={{ fontSize: '80px' }} className="text-center">404</h1>
              </div>

              <div style={{ marginTop: '-50px' }}>
                <h3 style={{ fontSize: '80px' }} className="h2">
                  Look like you're lost
                </h3>

                <p>the page you are looking for not available!</p>

                <a href="/" style={{ 
                  color: '#fff', 
                  padding: '10px 20px', 
                  background: '#39ac31', 
                  margin: '20px 0', 
                  display: 'inline-block' 
                }} className="link_404">Go to Home</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NoPage;
