import React from 'react';
import PropTypes from 'prop-types';
import './Message.css';

import Timestamp from './Timestamp';

const Message = (props) => {

  return (
    <section>

      <h2 class="entry-name"> {props.name} </h2>
      <div class="entry-bubble">
        <p class="entry-body"> {props.body} </p>
        < Timestamp time= {props.timeStamp} />
      </div>
    </section>
  );
};

Message.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string,
  timeStamp: PropTypes.string
};

export default Message;
