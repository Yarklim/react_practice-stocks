import React, { forwardRef } from 'react';
import s from './Modal.module.scss';

const Modal = forwardRef(({ data }, ref) => {
  return (
    <div ref={ref} className={s.modal}>
      <h3>{data.name}</h3>
    </div>
  );
});

export default Modal;
