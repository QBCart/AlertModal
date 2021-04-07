import { useAddModalAlert } from '@qbcart/eshop-alert-hooks';
import React, { FC, useState } from 'react';
import { render } from 'react-dom';
import 'alert-modal';

const AlertModalTest: FC = () => {
  const addAlert = useAddModalAlert();
  const [headerText, setHeaderText] = useState('');
  const [headerTextColor, setHeaderTextColor] = useState('');
  const [headerBackgroundColor, setHeaderBackgroundColor] = useState('');
  const [htmlBody, setHtmlBody] = useState('');
  const [bodyTextColor, setBodyTextColor] = useState('');
  const [bodyBackgroundColor, setBodyBackgroundColor] = useState('');
  const [iconName, setIconName] = useState('');
  const [iconColor, setIconColor] = useState('');

  return (
    <form onSubmit={(e) => e.preventDefault()} className="m-5">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            id="header-tab"
            data-toggle="tab"
            href="#header"
            role="tab"
            aria-controls="header"
            aria-selected="true"
          >
            Header
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="body-tab"
            data-toggle="tab"
            href="#body"
            role="tab"
            aria-controls="body"
            aria-selected="false"
          >
            Body
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="icon-tab"
            data-toggle="tab"
            href="#icon"
            role="tab"
            aria-controls="icon"
            aria-selected="false"
          >
            Icon
          </a>
        </li>
      </ul>
      <div className="tab-content mt-3" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="header"
          role="tabpanel"
          aria-labelledby="header-tab"
        >
          <div className="form-group">
            <label htmlFor="headerText">Text</label>
            <input
              id="headerText"
              className="form-control w-25 mb-3"
              onChange={(e) => setHeaderText(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="headerTextColor">Text Color</label>
            <input
              id="headerTextColor"
              className="form-control w-25 mb-3"
              type="color"
              onChange={(e) => setHeaderTextColor(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="headerBackgroundColor">Background Color</label>
            <input
              id="headerBackgroundColor"
              className="form-control w-25 mb-3"
              type="color"
              onChange={(e) => setHeaderBackgroundColor(e.target.value)}
            />
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="body"
          role="tabpanel"
          aria-labelledby="body-tab"
        >
          <div className="form-group">
            <label htmlFor="htmlBody">Html Body</label>
            <input
              id="htmlBody"
              className="form-control w-25 mb-3"
              onChange={(e) => setHtmlBody(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="bodyTextColor">Text Color</label>
            <input
              id="bodyTextColor"
              className="form-control w-25 mb-3"
              type="color"
              onChange={(e) => setBodyTextColor(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="bodyBackgroundColor">Background Color</label>
            <input
              id="bodyBackgroundColor"
              className="form-control w-25 mb-3"
              type="color"
              onChange={(e) => setBodyBackgroundColor(e.target.value)}
            />
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="icon"
          role="tabpanel"
          aria-labelledby="icon-tab"
        >
          <div className="form-group">
            <label htmlFor="iconName">Name</label>
            <input
              id="iconName"
              className="form-control w-25 mb-3"
              onChange={(e) => setIconName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="iconColor">Color</label>
            <input
              id="iconColor"
              className="form-control w-25 mb-3"
              type="color"
              onChange={(e) => setIconColor(e.target.value)}
            />
          </div>
        </div>
      </div>

      <button
        className="btn btn-outline-success mr-3"
        onClick={() =>
          addAlert({
            headerText,
            headerTextColor,
            headerBackgroundColor,
            htmlBody,
            bodyTextColor,
            bodyBackgroundColor,
            iconName,
            iconColor
          })
        }
      >
        Show Alert Modal
      </button>
    </form>
  );
};

render(<AlertModalTest />, document.getElementById('alert-modal-test'));
