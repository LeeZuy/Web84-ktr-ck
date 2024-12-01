
import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Row, Select, Input, Space, Table, Upload } from 'antd';


import './teachers.css';
const { Option } = Select;

const { Column, ColumnGroup } = Table;
const { Search } = Input;


const onSearch = (value, _e, info) => console.log(info?.source, value);


const Teachers = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const [dataTeacher, setDataTeacher] = useState(null);
  const [dataUser, setDataUser] = useState(null);

  useEffect(() => {
    let urls = [
      'http://localhost:3000/teachers',
      'http://localhost:3000/users'
    ];
    // let requests = urls.map(url => fetch(url));
    const fetchPromises = urls.map(url => fetch(url).then(response => response.json()));
    // Use Promise.all() to handle all fetch promises 
    Promise.all(fetchPromises)
      .then(responses => {
        const data = responses.map(response => response);
        setDataTeacher(data[0]);
        setDataUser(data[1]);
      })
      .catch(error => console.error('Error fetching data:', error));

  }, [])

  useEffect(() => {
    console.log(dataTeacher,dataUser);
  }, [dataTeacher, dataUser]);

  const checkDegrees = (type) => {
    if (type == "Doctorate") {
      return "Tiến sĩ";
    } else if (type == "Bachelor") {
      return "Cử nhân";
    } else if (type == "Master") {
      return "Thạc sỹ"
    }
  }


  const checkStatus = (stt) => {
    if (stt == true) {
      return <Button type="primary">Đang công tác</Button>;
    } else {
      return <Button type="primary">Dừng công tác</Button>;
    }
  }

  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };



  return (
    <div>
      {/* <NavLink to="/teacher-position" className="button secondary">Vị trí công tác</NavLink> */}
      <div className='input'>
        <Search
          placeholder="Tìm Kiếm Thông Tin"
          allowClear
          onSearch={onSearch}
          style={{
            width: 200,
          }}
        />
        <button className='button'>Tải lại</button>
        <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
            Tạo mới
          </Button>
        <div>
          
          <Drawer
            title="Tạo thông tin giáo viên"
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
                <Button onClick={onClose}>Thoát</Button>
                <Button onClick={onClose} type="primary">
                  Thêm
                </Button>
              </Space>
            }
          >
            <Form layout="vertical" >
              <Row gutter={16}>
                <Col span={24}>
                  <Upload
                    action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                    listType="picture-card"
                    fileList={fileList}
                    onChange={onChange}
                    onPreview={onPreview}
                  >
                    {fileList.length < 5 && '+ Upload'}
                  </Upload>
                </Col>
              </Row>

              <h2>Thông Tin cá nhân</h2>

              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="name"
                    label="Họ và Tên"
                    rules={[
                      {
                        required: true,
                        message: 'Nhập họ và tên',
                      },
                    ]}
                  >
                    <Input placeholder="Nguyễn Văn A" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Ngày sinh">
                    <DatePicker placeholder='Chọn ngày sinh' />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="phone"
                    label="Số điện thoại"
                    rules={[{ required: true, message: 'Nhập số điện thoại!' }]}>
                    <Input placeholder='Nhập số điện thoại' style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                      {
                        type: 'email',
                        message: 'email không tồn tại!',
                      },
                      {
                        required: true,
                        message: 'Nhập email',
                      },
                    ]}
                  >
                    <Input placeholder='example@school.edu.vn' />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="CCCD"
                    label="Số CCCD"
                    rules={[{ required: true, message: 'Nhập số CCCD!' }]}>
                    <Input placeholder='Nhập số CCCD' style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="address"
                    label="Địa chỉ"
                    rules={[{ required: true, message: 'Nhập số CCCD!' }]}>
                    <Input placeholder='Địa chỉ thường trú' style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
              </Row>

              <h2>Thông tin công tác</h2>

              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item
                    name="Vị trí công tác"
                    label="Vị trí công tác"
                    rules={[
                      {
                        required: true,
                        message: 'Chọn ví trí công tác',
                      },
                    ]}
                  >
                    <Select placeholder="Chọn ví trí công tác">
                      <Option value="xiao">Xiaoxiao Fu</Option>
                      <Option value="mao">Maomao Zhou</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <h2>Học vị</h2>

              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item
                    name="Vị trí công tác"
                    label="Vị trí công tác"
                    rules={[
                      {
                        required: true,
                        message: 'Chọn ví trí công tác',
                      },
                    ]}
                  >

                  </Form.Item>
                </Col>
              </Row>

            </Form>
          </Drawer>
        </div>
      </div>
      <Table dataSource={dataTeacher}>

        <Column title="Mã" dataIndex="code" key="code" />
        <Column title="Giáo viên" render={(_, record) => (
          <Space size="middle">{record.userId.$oid}</Space>
        )}/> 
        <Column title="Trình độ (cao nhất)" render={(_, record) => (
          <>
            <p>Bậc: {checkDegrees(record.degrees[0].type)}</p><br />
            <p>Chuyên ngành: {record.degrees[0].major}</p>
          </>
        )} />
        <Column title="Bộ môn" dataIndex="address" key="address" />
        <Column title="TT công tác"
          key="N/A"
          render={(_, record) => (
            <p className='NA'>N/A</p>
          )} />
        <Column title="Địa chỉ" dataIndex="address" key="address" />
        <Column title="Trạng thái" render={(_, record) => (
          <Space size="middle">{checkStatus(record.isActive)}</Space>
        )} />
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Button>Chi tiết</Button>
          )}
        />
      </Table>
    </div>
  )
}

export default Teachers