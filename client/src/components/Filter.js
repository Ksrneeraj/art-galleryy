import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

export default function Filter() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}>
      <Checkbox label="Option 1" defaultChecked />
      <Checkbox label="Option 2" />
      <Checkbox label="Option 3" />
      <Checkbox label="Option 4" />
    </div>
  );
}
