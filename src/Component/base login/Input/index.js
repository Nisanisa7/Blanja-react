import React from 'react'
import styled from 'styled-components';

function input_Login({type, name, placeholder, value, error, onChange}) {
    return (
        <Styles>
            <input type={type} name={name}
            placeholder={placeholder} value={value}
            className={`form-control ${error}`} onChange={onChange}/>
        </Styles>
    )
}

export default input_Login
const Styles = styled.div`
.form-control{
    height: 48px;
    width: 100%;
    margin-top: 20px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #9B9B9B;
    padding-left: 20px;
}
&.errorborder{
    border: 1px solid red;
    height: 48px;
    width: 100%;
    margin-top: 20px;
    box-sizing: border-box;
    border-radius: 4px;
    padding-left: 20px;
  }

`