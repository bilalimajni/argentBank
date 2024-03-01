import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../composant/nav";
import Footer from "../composant/footer";
import AcountWapper from "../composant/acountList";
import "./user.css";

import { setProfile } from "../redux/setprofil";

function User() {
  const dispatch = useDispatch();
  const profileState = useSelector((state) => state.profile);
  const accessToken = useSelector((state) => state.auth.token);

  const firstName = profileState.profile?.body?.firstName || "";
  let lastName = profileState.profile?.body?.lastName || "";

  const [editing, setEditing] = useState(false);
  const [newUserName, setNewUserName] = useState("");

  useEffect(() => {
    setNewUserName(profileState.profile?.body?.userName || "");
  }, [profileState.profile]);

  const editForm = () => {
    setEditing(true);
  };

  const handleSave = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ userName: newUserName }),
        }
      );

      if (response.ok) {
        setEditing(false);
        dispatch(
          setProfile({
            ...profileState.profile,
            body: { ...profileState.profile.body, userName: newUserName },
          })
        );
      } else {
        console.error("Failed to update username");
      }
    } catch (error) {
      console.error("Error while updating username:", error);
    }
  };

  const handleCancel = () => {
    setEditing(false);
  };

  return (
    <>
      <Nav />
      <main className="dark">
        {editing ? (
          <>
            <form className="from">
              <h3> Edit user info</h3>
              <div>
                <div>
                  <label className="LABEL-EDIT" htmlFor="newUserName"> User Name:</label>
                  <input
                    className="input-user-edit"
                    type="text"
                    id="newUserName"
                    defaultValue={newUserName}
                    onChange={(e) => setNewUserName(e.target.value)}
                  />
                </div>
                <br />
                <div>
                  <label className="LABEL-EDIT">Last Name:</label>
                  <input
                    className="input-user-edit"
                    type="text"
                    value={lastName}
                    disabled
                  />
                </div>
                <br />
                <div>
                  <label className="LABEL-EDIT">First Name:</label>
                  <input
                    className="input-user-edit"
                    type="text"
                    value={firstName}
                    disabled
                  />
                </div>
                <br />
              </div>
              <div className="div-button">
                <button
                  className="input-eddit"
                  type="button"
                  onClick={handleSave}
                >
                  Save
                </button>
                <button
                  className="input-eddit"
                  type="button"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="header">
            <h1>
              Welcome back
              <br />
              {firstName} {lastName}
            </h1>
            <button onClick={editForm} className="edit-button">
              Edit Name
            </button>
          </div>
        )}

        <AcountWapper />
      </main>
      <Footer />
    </>
  );
}

export default User;
