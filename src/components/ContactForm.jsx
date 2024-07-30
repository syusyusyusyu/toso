import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="form-wrapper">
      <h2 className="title float-in-element">お問い合わせフォーム</h2>
      <input className="input-field float-in-element" type="text" placeholder="名前" />
      <input className="input-field float-in-element" type="email" placeholder="メールアドレス" />
      <textarea className="textarea-field float-in-element" placeholder="メッセージ"></textarea>
      <button className="button float-in-element">送信</button>
    </div>
  );
};

export default ContactForm;
