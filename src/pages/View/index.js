import React, { useState, useEffect } from 'react';
import firebaseDb from '../../config/firebase.js';
import { useParams, Link, useHistory } from 'react-router-dom';
import './styles.css';

const View = () => {
  const [data, setData] = useState({});

  let currentId = useParams();
  const { id } = currentId;
  const history = useHistory();
  useEffect(() => {
    firebaseDb.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({
          ...snapshot.val(),
        });
      } else {
        snapshot({});
      }
    });
  }, [id]);
  return (
    <div className="container mt-5">
      {Object.keys(data).map((userId) => {
        if (userId === id) {
          return (
            <div key={userId} className="view">
              <div className="card">
                <div className="card-header">
                  <p>User Contact Detail</p>
                </div>
                <div className="container">
                  <strong>Name: </strong>
                  <span>{data[id].name}</span>
                  <br />
                  <br />
                  <strong>Email: </strong>
                  <span>{data[id].email}</span>
                  <br />
                  <br />
                  <strong>Contact: </strong>
                  <span>{data[id].contact}</span>
                </div>
                <br />
                <br />

                <Link to="/">
                  <button
                    className="btn btn-edit"
                    onClick={() => history.push("/")}
                  >
                    Go Back
                  </button>
                </Link>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default View;
