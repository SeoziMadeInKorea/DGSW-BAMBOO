import React from 'react';
import Sidebar from 'components/Sidebar';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const PageTemplate = ({ children }) => {
  return (
    <div className={cx('page-wrap')}>
      <div className={cx('page-template')}>
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default PageTemplate;
