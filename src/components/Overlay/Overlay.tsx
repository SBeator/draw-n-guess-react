import * as React from 'react';

import './Overlay.css';

export interface Props {
  children: React.ReactNode;
}

export default ({ children }: Props) => (
  <div className="overlay-root">
    <div className="overlay-content">{children}</div>
  </div>
);
