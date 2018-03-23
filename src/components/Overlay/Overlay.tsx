import * as React from 'react';

import './Overlay.css';

export interface Props {
  children: React.ReactNode;
}

export default ({ children }: Props) => (
  <div className="overlay_root">
    <div className="overlay_content">{children}</div>
  </div>
);
