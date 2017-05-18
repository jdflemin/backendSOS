import * as mongoose from 'mongoose';

export interface Course extends mongoose.Document {
  name;
  icon;
}

let courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  icon: {
    type: String
  }
});

export default mongoose.model<Course>('Course', courseSchema);
