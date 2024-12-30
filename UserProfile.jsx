
function UserProfile() {
  return (
    <div className="form-container">
      <div className="form-box">
        <h2>Slam Book</h2>
        <label>Name: </label>
        <input type="text" />
        <br />
        <label>Age: </label>
        <input type="number" />
        <br />
        <label>Gender: </label>
        <input type="text" />
        <br />
        <label>About Yourself: </label>
        <input type="text" />
        <br />
        <label>Address: </label>
        <input type="text" />
        <br />
        <label>Favorite Actor: </label>
        <input type="text" />
        <div>
          <center>
        <button type="button">Submit</button></center>
        </div>
      </div>
    </div>
    
  );
}

export default UserProfile;
