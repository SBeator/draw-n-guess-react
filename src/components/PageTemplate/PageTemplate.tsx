import * as React from 'react';

import './PageTemplate.css';

export interface Props {
  leftContent: React.ReactNode;
  children: React.ReactNode;
}

export default ({ leftContent, children }: Props) => (
  <div className="page-root">
    <div className="page-left_column">{leftContent}</div>
    <div className="page-main_column">{children}</div>
  </div>
);
