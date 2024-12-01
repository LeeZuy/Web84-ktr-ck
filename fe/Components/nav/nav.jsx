import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import './nav.css';
import Teachers from '../teacher/teachers.jsx';
import TeacherPositions from '../teacher-positions/TeacherPositions.jsx';


const nav = () => {


  // const [dataTeacher, setDataTeacher] = useState([]);
  // const [dataUser, setDataUser] = useState([]);
  // const [dataTeacherPos, setDataTeacherPos] = useState([]);

  // useEffect(() => {
  //   const getDataFromAPI = async () => {
  //       let urls = [
  //       'http://localhost:3000/teachers',
  //       'http://localhost:3000/users',
  //       'http://localhost:3000/teacherpositions'
  //           ];
  //           // let requests = urls.map(url => fetch(url));
  //           const fetchPromises = urls.map(url => fetch(url).then(response => response.json()));
  //           // Use Promise.all() to handle all fetch promises 
  //           await Promise.all(fetchPromises)
  //           .then(responses => {
  //               const data = responses.map(response => response);
  //               setDataTeacher(data[0]);
  //               setDataUser(data[1]);
  //               setDataTeacherPos(data[2]);
  //           })
  //           .catch(error => console.error('Error fetching data:', error));  

  //         }
  //         getDataFromAPI();
  // }, [dataTeacher, dataUser, dataTeacherPos]);


    <div >
   <Tabs className='tab'
    defaultActiveKey="1"
    items={[
      {
        label: 'Danh sách Giáo viên',
        key: '1',
        children: <Teachers />,
      },
      {
        label: 'Danh sách Vị trí công tác',
        key: '2',
        children: <TeacherPositions/>,
      },
    ]}
  />
  </div>
  

  return (
    <div >
   <Tabs className='tab'
    defaultActiveKey="1"
    items={[
      {
        label: 'Danh sách Giáo viên',
        key: '1',
        children: <Teachers />,
      },
      {
        label: 'Danh sách Vị trí công tác',
        key: '2',
        children: <TeacherPositions/>,
      },
    ]}
  />
  </div>
  )
    
}

export default nav