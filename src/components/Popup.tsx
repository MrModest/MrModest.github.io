import React, {ReactNode, useCallback, useEffect} from 'react';

import classNames from 'classnames/bind';
import styles from './Popup.module.css';
const cx = classNames.bind(styles);

interface PopupProps {
  children: ReactNode,
  onClose(): void,
  className: string,
  isOpen?: boolean,
}

const isEscapePressed = (event: KeyboardEvent) => event.key === 'Escape' || event.key === 'Esc';

const Popup = ({children, onClose, className, isOpen = true}: PopupProps) => {

  const onContentClick = useCallback((e) => {
    e.stopPropagation();
  }, []);

  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (isEscapePressed(e)) onClose();
    };

    if (isOpen) {
      document.body.classList.add('fix-scroll');
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.body.classList.remove('fix-scroll');
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  return (
    <div onClick={onClose} className={cx('popup', { opened: isOpen })}>
      <div onClick={onContentClick} className={cx('popup-content', className)}>
        <button type="button" onClick={onClose} className={cx('button', 'popup-close-btn')}>
          <span>&times;</span>
        </button>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Popup;