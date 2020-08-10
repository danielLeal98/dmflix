import React from 'react';
import Select from 'react-select';

function SelectForm() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <Select
      style={{ backgroundColor: '#53585d' }}
      options={options}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          text: 'orangered',
          primary25: '#2d4059',
          primary: 'grey',
        },
      })}
    >
      {' '}
      <span>Categria</span>{' '}
    </Select>
  );
}
export default SelectForm;
