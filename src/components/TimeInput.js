import React, { useState } from 'react';
import TimePicker from 'react-bootstrap-time-picker';

export default function TimeInput() {
  const [value, onChange] = useState('10:00');
  return (
    <div>

    <TimePicker 
    step={15} 
    style={{width: '150px'}} 
    onChange={onChange}
    value={value}
    />
    </div>
  );
}