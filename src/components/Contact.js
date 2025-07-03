const Contact = () => {
  return (
    <>
      <div>
        <h2 className="font-bold text-lg p-4 m-4">Contact us Page</h2>
        <form>
          <input
            type="text"
            className="border border-black p-2 m-2"
            placeholder="Name"
          ></input>
          <input
            type="text-area"
            className="border border-black p-2 m-2"
            placeholder="Message"
          ></input>
          <button className="border border-black p-2 m-2 rounded-lg bg-gray-100">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
