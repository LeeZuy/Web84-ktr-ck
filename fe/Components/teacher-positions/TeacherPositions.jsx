import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';

import { Space, Table, Tag, Button, Col, Drawer, Form, Input, Row, Select, Flex, Radio } from 'antd';
const { Column, ColumnGroup } = Table;
import './TeacherPositions.css'







const TeacherPositions = () => {

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const [dataTeacherPos, setDataTeacherPos] = useState(null);
  const [dataTeacher, setDataTeacher] = useState(null);

  useEffect(() => {

    let urls = [
      'http://localhost:3000/teacherpositions',
      'http://localhost:3000/teachers'
    ];
    // let requests = urls.map(url => fetch(url));
    const fetchPromises = urls.map(url => fetch(url).then(response => response.json()));
    // Use Promise.all() to handle all fetch promises 
    Promise.all(fetchPromises)
      .then(responses => {
        const data = responses.map(response => response);
        setDataTeacherPos(data[0]);
        setDataTeacher(data[1]);
      })
      .catch(error => console.error('Error fetching data:', error));

  }, [])

  useEffect(() => {
    console.log(dataTeacherPos);
  }, [dataTeacher, dataTeacherPos]);

  const checkStatus = (type) => {
    if(type == true){
      return <button style={{backgroundColor: 'green', padding: '5px 10px', color: 'white'}}>Hoạt động</button>;
    } else {
      return <button style={{backgroundColor: 'red', padding: '5px 10px', color: 'white'}}>Hoạt động</button>;
    }
  } 

  return (
    <div>
      <div className='button'>
        <Button className='bt' type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
          Tạo
        </Button>
        <Drawer
          title="Vị trí công tác"
          width={720}
          onClose={onClose}
          open={open}
          styles={{
            body: {
              paddingBottom: 80,
            },
          }}
          extra={
            <Space>
              <Button onClick={onClose}>Cancel</Button>
              <Button onClick={onClose} type="primary">
                Submit
              </Button>
            </Space>
          }
        >
          <Form layout="vertical" >
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="code"
                  label="Mã"
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="Name"
                  label="Tên"
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="description"
                  label="Mô tả"
                  rules={[
                    {
                      required: true,
                      message: 'please enter url description',
                    },
                  ]}
                >
                  <Input.TextArea rows={4} placeholder="please enter url description" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16} >
              <Col span={12} >
                <Form.Item
                  name="trangthai"
                  label="Trạng thái"
                >
                  <Flex vertical gap="middle">
                    <Radio.Group defaultValue="a" buttonStyle="solid">
                      <Radio.Button value="a">Hoạt động</Radio.Button>
                      <Radio.Button value="b">Ngừng</Radio.Button>
                    </Radio.Group>
                  </Flex>
                </Form.Item>

              </Col>
            </Row>
          </Form>
        </Drawer>
        <Button>Làm mới</Button>
      </div>



      <Table dataSource={dataTeacherPos}>
        <Column
          title="STT"
          key="index"
          render={(value, item, index) => index + 1}
        />
        <Column title="Mã" dataIndex="code" key="code" />
        <Column title="Tên" dataIndex="name" key="name" />
        <Column title="Trạng thái" render={(_, item) => ( checkStatus(item.isActive) )} />
        <Column title="Mô tả" dataIndex="des" key="des" />
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <a>Delete</a>
            </Space>
          )}
        />
      </Table>
    </div>
  )
}

export default TeacherPositions