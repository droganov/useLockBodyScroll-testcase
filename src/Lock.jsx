import React from 'react'
import {useLockBodyScroll, useToggle} from 'react-use';

export default () => {
  useLockBodyScroll(true)
  return <div className="lock" />;
}
