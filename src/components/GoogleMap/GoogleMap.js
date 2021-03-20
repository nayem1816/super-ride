import React from 'react';

const GoogleMap = () => {
    return (
        <div className="">
           <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24520.900069039417!2d90.41557887153529!3d23.993884153030898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755dafdd8aa72a1%3A0xe3a23793cb030fdb!2sGazipur!5e0!3m2!1sen!2sbd!4v1616227360256!5m2!1sen!2sbd"
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