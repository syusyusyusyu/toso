import React, { useState } from 'react';
import axios from 'axios';
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [responseData, setResponseData] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  //FromDelete.phpにアクセスしてデータを削除
  const handleDelete = async (e) => {
    e.preventDefault();
    console.log('送信するデータ:', formData); // 送信データをコンソールに表示
  
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('message', formData.message);
  
    try {
      // PHPサーバーへデータを送信
      const response = await axios.post('http://localhost/toso/backend/FormDelete.php', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert(response.data); 
    } catch (error) {
      console.error('フォーム送信エラー:', error);
      alert('送信に失敗しました。');
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('送信するデータ:', formData); // 送信データをコンソールに表示
  
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('message', formData.message);
  
    try {
      // PHPサーバーへデータを送信
      const response = await axios.post('http://localhost/toso/backend/SaveData.php', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert(response.data); 
    } catch (error) {
      console.error('フォーム送信エラー:', error);
      alert('送信に失敗しました。');
    }
  };

  const handleOpen = async (e) => {
    e.preventDefault();
    console.log('送信するデータ:', formData); // 送信データをコンソールに表示
  
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('message', formData.message);
  
    try {
      // PHPサーバーからデータを取得
      const response = await axios.get('http://localhost/toso/backend/FormOpen.php',"http://localhost/toso/backend/FormOpen.css");
      const responseData = response.data;
  
      // データを表示
      console.log('取得したデータ:', responseData); // 取得したデータをコンソールに表示
      setResponseData(responseData);
  
    } catch (error) {
      console.error('データ取得エラー:', error);
      alert('データの取得に失敗しました。');
    }
  }
  

  return (
    <div className="formContainer">
      <h1 className="title">お問い合わせフォーム</h1>
      <form>
        <input type="text" name="name" placeholder="名前" value={formData.name} onChange={handleChange} required className="input"/>
        <input type="email" name="email" placeholder="メールアドレス" value={formData.email} onChange={handleChange} required className="input"/>
        <textarea name="message" placeholder="メッセージ" value={formData.message} onChange={handleChange} required className="textarea"></textarea>
        <button type="submit" onClick={handleSubmit} className="button">送信</button><br /><br />
        {/* <button type="button" onClick={handleDelete} className="button">最新レコード削除</button><br /><br />
        <button type="open" onClick={handleOpen} className="button">お問い合わせフォーム一覧</button><br /><br />
        {responseData && <div>{responseData}</div>} */}
      </form>
    </div>
  );
};

export default ContactForm;
