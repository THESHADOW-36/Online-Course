import { connect } from "mongoose";


export const connectDB = async () => {
   await connect(process.env.MONGO_URL
      // {
      //    useNewUrlParser: true,
      //    useUnifiedTopology: true,
      // }
   )
   console.log('Connected to DataBase...');
}