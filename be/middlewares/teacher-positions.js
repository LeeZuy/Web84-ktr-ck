const teacherPositionMiddleware = {
    createTeacherPosition: (req, res, next) => {
        try {
            const {name, code, des} = req.body;
            if(!name) throw new Error ('name is missing!');
            if(!code) throw new Error ('code is missing!');
            if(!des) throw new Error ('des is missing!');
            return next();
        } catch (error) {
            res.status(403).send({
                message:error.message
            });
        }
    }
}

export default teacherPositionMiddleware;