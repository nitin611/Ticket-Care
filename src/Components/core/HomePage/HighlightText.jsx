import React from 'react';
import PropTypes from 'prop-types';

function HighlightText({ text }) {
  return (
    <span className='bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold'>
      {" "}
      {text}
    </span>
  );
}

HighlightText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HighlightText;
