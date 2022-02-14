import * as React from 'react';
import { IStatusListProps } from '../../types';

export function StatusList(props: IStatusListProps) {
  const statusList = ['None', 'Viewed', 'Accepted', 'Rejected'];
  const selectedStatus = props.status || statusList[0];
  return (
    <div className="status-info">
      {statusList.map((x, i) => (
        <button
          className={`flat-button ${selectedStatus === x ? 'active' : ''}`}
        >
          {x}
        </button>
      ))}
    </div>
  );
}
