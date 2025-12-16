import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_n99by0h',   // 🔁 replace
        'template_r77a58w',  // 🔁 replace
        formRef.current,
        'Lllp5_kZb-rP-aXcg'    // 🔁 replace
      )
      .then(() => {
        setSubmitted(true);
        setLoading(false);

        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            from_name: '',
            from_email: '',
            message: ''
          });
        }, 3000);
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setLoading(false);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-gradient-to-b from-gray-800 to-gray-900"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* CONTACT INFO */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-gray-300 mb-8">
              Feel free to reach out for collaborations, opportunities, or just to say hi!
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a
                    href="mailto:tesfayedinku2021@gmail.com"
                    className="text-gray-300 hover:text-blue-400 transition"
                  >
                    tesfayedinku2021@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a
                    href="tel:+251939060612"
                    className="text-gray-300 hover:text-green-400 transition"
                  >
                    +251 939 060 612
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/10 rounded-lg">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-300">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div>
            {submitted ? (
              <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8 text-center">
                <FaCheckCircle className="text-green-400 text-5xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-300">
                  Thank you for your message. I'll get back to you soon!
                </p>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6 bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50"
              >
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg"
                />

                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg"
                />

                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg resize-none"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold"
                >
                  {loading ? 'Sending...' : <>
                    <FaPaperPlane /> Send Message
                  </>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

