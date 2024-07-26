import React from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => (
  <div className="form-container">
    <h2 className="ttl float-in-el">お問い合わせフォーム</h2>
    <input className="input float-in-el" type="text" placeholder="名前" />
    <input className="input float-in-el" type="email" placeholder="メールアドレス" />
    <textarea className="textarea float-in-el" placeholder="メッセージ"></textarea>
    <button className="btn float-in-el">送信</button>
  </div>
);

export default ContactForm;
