import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const MyProfile = () => {
  const [displayChangePassword, toggleChangePassword] = useState(false);

  const onChange = (e) => {};
  const onSubmit = (e) => {};
  return (
    <Fragment>
      {" "}
      <h1 className="large text-primary">Edit Profile</h1>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            //    value={name}
            onChange={(e) => onChange(e)}
            // required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            // value={email}
            onChange={(e) => onChange(e)}
            // required
          />
        </div>
        <div className="form-group">
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => toggleChangePassword(!displayChangePassword)}
          >
            Change Password
          </button>
        </div>
        {displayChangePassword && (
          <Fragment>
            <div className="form-group">
              <input
                type="password"
                placeholder="Old password"
                name="oldPassword"
                //    value={oldPassword}
                onChange={(e) => onChange(e)}
                // required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="New password"
                name="password"
                // value={password}
                onChange={(e) => onChange(e)}
                // required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Repeat new password"
                name="password2"
                // value={password2}
                onChange={(e) => onChange(e)}
                // required
              />
            </div>
          </Fragment>
        )}
        <input type="submit" className="btn btn-primary" value="Save" />
      </form>
    </Fragment>
  );
};

export default MyProfile;
