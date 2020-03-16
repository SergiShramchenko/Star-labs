import React from 'react';

import './formInput.scss';

export default ({ handleChange, label, ...otherProps }) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : null
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);
