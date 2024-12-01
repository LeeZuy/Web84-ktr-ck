import UserModel from "../model/user.js";
import bcrypt from 'bcrypt';


const teacherController = {
    getTeachers: async (req, res) => {
            try {
                const result = await (fetch('http://localhost:3000/users'),fetch('http://localhost:3000/teachers'));
                    const data = await result.json();
                    console.log(data);

                
                const {currentPage = 1, pageSize = 10} = req.query;
                const totalItems = data.length;
                const totalPage = Math.ceil(totalItems / pageSize);
                const skip = pageSize * (currentPage - 1);

                const rs = data.slice(pageSize * (currentPage - 1), pageSize * currentPage);

                const d = {
                    totalItems,
                    totalPage,
                    currentPage,
                    items: rs,
                }
                res.status(200).send({
                    message:'Successful',
                    d
                })
            } catch (error) {
                res.status(500).send({
                    message: error.message,
                    data:null
                })
            }
    },
    createTeacher: async (req, res) => {
        try {
        const createTeacher = await UserModel.create(req.body);
        res.status(201).send({
            message: 'Successful!',
            data: createTeacher
        })
    } catch (error) {
        res.status(500).send({
            message: error.message,
            data:null
        })
    }
    }
};

export default teacherController;