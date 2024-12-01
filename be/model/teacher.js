import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users',
        select: false
    },
    isActive:{
        type: Boolean,
        default: false
    },
    isDeleted:{
        type: Boolean,
        default: false,
        select: false
    },
    code:{
        type: String,
        required: true
    },
    startDate: Date,
    endDate: Date,
    teacherPositions:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'teacher-positions'
    },
    degrees:{
        type: String,
        school: String,
        major: String,
        year: Number,
        isGraduated: Boolean
    }
});

const TeacherModel = mongoose.model('teacher',teacherSchema);

export default TeacherModel;