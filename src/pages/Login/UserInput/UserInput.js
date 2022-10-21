import React from 'react';

const UserInput = ({
  info: { title, name, type, placeholder },
  changeAuth,
}) => {
  return (
    <div className={`${name}Container`}>
      <span className="itemName">{title}</span>
      <input
        className={name}
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={changeAuth}
      />
    </div>
  );
};

export default UserInput;
