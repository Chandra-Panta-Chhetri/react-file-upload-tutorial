import React, { useState } from "react";
import FileUpload from "./components/file-upload/file-upload.component";

import { connect } from "react-redux";
import { createNewUser } from "./redux/user/user.actions";

function App({ createNewUser }) {
  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: []
  });

  const updateUploadedFiles = (files) =>
    setNewUserInfo({ ...newUserInfo, profileImages: files });

  const handleSubmit = (event) => {
    event.preventDefault();
    createNewUser(newUserInfo);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FileUpload
          accept=".jpg,.png,.jpeg"
          label="Profile Image(s)"
          updateFilesCb={updateUploadedFiles}
          multiple
        />
        <button type="submit">Create New User</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  createNewUser: (newUserInfo) => dispatch(createNewUser(newUserInfo))
});

export default connect(null, mapDispatchToProps)(App);
