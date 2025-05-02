import Button from "../btn/Button";
const Contact: React.FC = () => {
  return (
  <section id="contact" className="my-8">
   <form
  action="https://formspree.io/f/xqaqeedv"
  method="POST"
  className="max-w-xl mx-auto space-y-4"
>
  <h2 className="text-4xl font-bold text-center  bg-gradient-to-b from-black to-[#0de4d6] text-transparent bg-clip-text">Contact Us</h2>
  <p className="text-center text-gray-600">Simply request a demo today, and within 24 hours, you'll receive full access to explore all the features and benefits we offer. Experience it firsthand!</p>

  <input
    type="text"
    name="name"
    required
    placeholder="Your Name"
    className="w-full p-3 border rounded"
  />
  <input
    type="email"
    name="email"
    required
    placeholder="Your Email"
    className="w-full p-3 border rounded"
  />
  <textarea
    name="message"
    required
    rows={5}
    placeholder="Your Message"
    className="w-full p-3 border rounded"
  ></textarea>
     <Button
            label=" Send Message"
            variant="primary"
          />

  {/* <button
    type="submit"
    className="bg-blue-600 text-white w-50 py-3 rounded hover:bg-blue-700 text-center"
  >
    Send Message
  </button> */}
</form>
 
    </section>);
};

export default Contact;
