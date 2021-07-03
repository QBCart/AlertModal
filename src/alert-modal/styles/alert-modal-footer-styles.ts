/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source repo.
 */

import styled from 'styled-components';

const AlertModalFooterStyles = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  .close-button {
    cursor: pointer;
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    -webkit-appearance: button;
    text-transform: none;
    overflow: visible;
    margin: 0;
    font-family: inherit;
  }
  .close-button.focus,
  .close-button:focus {
    color: #fff;
    background-color: #5a6268;
    border-color: #545b62;
    box-shadow: 0 0 0 0.2rem rgb(130 138 145 / 50%);
    outline: 0;
  }
  .close-button:hover {
    color: #fff;
    background-color: #5a6268;
    border-color: #545b62;
    text-decoration: none;
  }
`;

export default AlertModalFooterStyles;
