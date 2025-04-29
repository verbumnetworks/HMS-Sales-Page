import Button from "../btn/Button";
const Contact: React.FC = () => {
  return (
  <section id="contact" className="my-8">
   <form
  action="https://formspree.io/f/xqaqeedv" // replace with your actual form ID
  method="POST"
  className="max-w-xl mx-auto space-y-4"
>
  <h2 className="text-2xl font-bold text-center">Contact Us</h2>
  <p className="text-center text-gray-600">We’ll get back to you within 24 hours.</p>

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
