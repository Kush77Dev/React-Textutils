import React from 'react';

function Alert(props) {
  const Capitalize = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    <div>
      {props.alert && (
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          {Capitalize(props.alert.type)}: <strong>{props.alert.msg}</strong>
        </div>
      )}
    </div>
  );
}

export default Alert;
