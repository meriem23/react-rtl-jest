const Application = () => {
  return (
    <>
      <h1>Job Application form</h1>
      <h2>Section One</h2>
      <p>All fields are mandatory</p>
      <span title="close">X</span>
      <img
        src="https://img.freepik.com/free-vector/hand-drawn-flat-design-simple-flower-outline_23-2149380501.jpg"
        alt="rose"
      />
      <div data-testid="customHTML">custome HTML element</div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Fullname"
            value="esra"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="bio">BIO</label>
          <textarea id="bio" name="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Job Location</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">US</option>
            <option value="UK">UK</option>
            <option value="CA">CANADA</option>
            <option value="TN">TUNISIA</option>
            <option value="FR">FRANCE</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" />I agree to the terms and
            conditions
          </label>
        </div>
        <button disabled>Submit</button>
      </form>
    </>
  );
};

export default Application;
