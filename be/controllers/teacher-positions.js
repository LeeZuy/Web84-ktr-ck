import TeacherPositionModel from "../model/teacherPosition.js";




const teacherPositionController = {
    getTeacherPosition: async (req, res) => {
            try {
                const result = await fetch('http://localhost:3000/teacherpositions');
                    const data = await result.json();
                    res.send({
                        data
                    });
            } catch (error) {
                res.status(500).send({
                    message: error.message,
                    data:null
                })
            }
    },
    createTeacherPosition: async (req, res) => {
        try {
        const createTeacherPosition = await TeacherPositionModel.create(req.body);
        res.status(201).send({
            message: 'Successful!',
            data: createTeacherPosition
        })
    } catch (error) {
        res.status(500).send({
            message: error.message,
            data:null
        })
    }
    }
};

export default teacherPositionController;