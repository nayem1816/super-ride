import React from 'react';

const GoogleMap = () => {
    return (
        <div className="">
           <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d277672.49254237977!2d90.20662676730602!3d23.877535215891424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5d05e7074dd%3A0xd1c58803049f00c7!2sUttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1616254558424!5m2!1sen!2sbd"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0, borderRadius: '5px' }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
        </div>
    );
};

export default GoogleMap;