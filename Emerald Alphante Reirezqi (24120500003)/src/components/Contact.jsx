import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import illustration2 from '../assets/illustration2.png';
import '../App.css'; 

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  
  const onSubmit = e => {
    e.preventDefault();
    
    if (/\d/.test(form.name)) {
      alert('Nama tidak boleh mengandung angka!');
      return; // hentikan submit jika validasi gagal
    }

    emailjs.send(
      'service_wtpxty8', //service ID EmailJS
      'template_k312afw', //template ID EmailJS
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        to_email: 'emeraldalphanter@gmail.com',
      },
      'l6au9pgmCtZN8dvqY' //user ID EmailJS
    )
    .then((result) => {
      alert('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    }, (error) => {
      alert('Failed to send message, please try again.');
      console.error(error);
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-visual">
        <h2>Got a project in <span className="accent">mind?</span></h2>
        <img src={illustration2} alt="Thinking Illustration" className='zoom-on-hover' style={{borderRadius: '10%'}}/>
      </div>
      <form onSubmit={onSubmit} className="contact-form">
        <div className="row">
          <input name="name" placeholder="Your name" value={form.name} onChange={onChange} required />
          <input name="email" placeholder="Your email" value={form.email} onChange={onChange} required />
        </div>
        <textarea name="message" placeholder="Your Message" value={form.message} onChange={onChange} required />
        <button type="submit">Send Message ✈️ </button >
      </form>
    </section>
  );
}
