import React, { useState } from "react";
import { Button, Modal, Row } from "antd";
import { MessageOutlined } from "@ant-design/icons";
import ChatBot from "./Chatbot"
import "../App.css";
import icon from '../data/icon.png';  // replace this with your actual icon path

const ChatBotModal = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div >
      {/* <Button
        type="primary"
        shape="circle"
        icon={<MessageOutlined />}
        size="large"
        onClick={showModal}
        style={{ position: "fixed", bottom: "30px", right: "30px" }} // This will make the button float
      >
        <img src={icon} alt="button icon" style={{ width: '20px', height: '20px' }}/>
      </Button> */}
      <div onClick={showModal} style={{ position: "fixed", bottom: "30px", right: "30px" }} >
        <img className="image-icon" src={icon} alt="button icon" style={{ width: '120px', height: '120px' }}/>
      </div>
      <Modal
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
        title={<Row justify="start" align="middle" style={{paddingBottom: 10}}>
                <img src={icon} alt="button icon" style={{ width: '40px', paddingRight: 10}}/> 
                <h2 style={{padding: 0, margin: 0}}>Ask Singapore Advisor</h2>
            </Row>}
        open={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={500}
        wrapClassName="chatbot-modal" 
      >
        <ChatBot />
      </Modal>
    </div>
  );
};

export default ChatBotModal;
