function ContactUs() {
  return (
    <div className="maxcont">
      <div className="con-container">
        <h1>Contact US</h1>
        <input type="text" placeholder="Enter your Name" required />
        <input type="email" placeholder="Enter email" required />
        <input type="number" placeholder="Enter Number" required />
        <button>Submit</button>
      </div>
    </div>
  );
}
export default ContactUs;
