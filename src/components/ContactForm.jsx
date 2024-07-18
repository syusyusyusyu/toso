import React, { useState } from 'react';
import axios from 'axios';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('送信するデータ:', formData); // 送信データをコンソールに表示

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('message', formData.message);

    try {
      // // HubSpot へデータを送信
      // await axios.post(`https://api.hsforms.com/submissions/v3/integration/submit/<portalId>/<formGuid>`, {
      //   fields: [
      //     { name: 'name', value: formData.name },
      //     { name: 'email', value: formData.email },
      //     { name: 'message', value: formData.message }
      //   ]
      // });

      // PHPサーバーへデータを送信
      const response = await axios.post('http://localhost/toso/backend/save_data.php', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert(response.data);  // 追加: PHPからのレスポンスを表示
    } catch (error) {
      console.error('フォーム送信エラー:', error);
      alert('送信に失敗しました。');
    }
  };

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>お問い合わせフォーム</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="名前" value={formData.name} onChange={handleChange}required className={styles.input}/>
        <input type="email"name="email"placeholder="メールアドレス"value={formData.email}onChange={handleChange}required className={styles.input}/>
        <textarea name="message"placeholder="メッセージ"value={formData.message}onChange={handleChange}required className={styles.textarea}></textarea>
        <button type="submit" className={styles.button}>送信</button>
      </form>
    </div>
  );
};

export default ContactForm;
