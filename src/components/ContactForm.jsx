import React, { useState } from 'react';
import axios from 'axios';
import "./ContactForm.css";

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
      if (e.target.type === 'delete') {
        // PHPサーバーへデータを送信して削除
        const response = await axios.post('http://localhost/toso/backend/FromDelete.php', data, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        alert(response.data); // 追加: PHPからのレスポンスを表示
      } else {
        // 通常のフォーム送信
        // await axios.post(`https://api.hsforms.com/submissions/v3/integration/submit/<portalId>/<formGuid>`, {
        //   fields: [
        //     { name: 'name', value: formData.name },
        //     { name: 'email', value: formData.email },
        //     { name: 'message', value: formData.message }
        //   ]
        // });
  
        // PHPサーバーへデータを送信
        const response = await axios.post('http://localhost/toso/backend/SaveData.php', data, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        alert(response.data); // 追加: PHPからのレスポンスを表示
      }
    } catch (error) {
      console.error('フォーム送信エラー:', error);
      alert('送信に失敗しました。');
    }
  };
  

  return (
    <div className="formContainer">
      <h1 className="title">お問い合わせフォーム</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="名前" value={formData.name} onChange={handleChange}required className="input"/>
        <input type="email"name="email"placeholder="メールアドレス"value={formData.email}onChange={handleChange}required className="input"/>
        <textarea name="message"placeholder="メッセージ"value={formData.message}onChange={handleChange}required className="textarea"></textarea>
        <button type="submit" className="button">送信</button>
        {/* <button type="delete" className="button">最新レコード削除</button> */}
      </form>
    </div>
  );
};

export default ContactForm;
