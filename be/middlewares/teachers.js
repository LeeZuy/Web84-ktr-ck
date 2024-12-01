

const teacherMiddleware = {
    createTeacher: (req, res, next) => {
        try {
            const {name, email} = req.body;
            if(!name) throw new Error ('name is missing!');
            if(!email) throw new Error ('email is missing!');
            return next();
        } catch (error) {
            res.status(403).send({
                message:error.message
            });
        }
    }
}

export default teacherMiddleware;