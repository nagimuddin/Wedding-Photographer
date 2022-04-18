import React from 'react';

const Register = () => {
    return (
        <div className="w-50 m-auto text-primary">
        <h2>Please Rgister Here</h2>
        <from>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="from-label">
              Name
            </label>
            <input
              type="email"
              className="from-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="from-label">
              Email
            </label>
            <input
              type="email"
              className="from-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="from-label">
              Password
            </label>
            <input
              type="password"
              className="from-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 from-check">
            <input
              type="checkbox"
              className="from-check-input"
              id="exampleCheck1"
            />
            <label className="from-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </from>
      </div>
    );
};

export default Register;