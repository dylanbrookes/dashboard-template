import mongoose from "mongoose";

// Singleton to ensure we only connect to the database once.
// This might be taken care of by mongoose/nextjs, but doing this to be sure.
var MONGOOSE_CONNECTION: any;

export default function mongoDB() {
  if (MONGOOSE_CONNECTION) {
    return MONGOOSE_CONNECTION;
  }
  MONGOOSE_CONNECTION = mongoose.connect(process.env.MONGODB_URI as string);
  return MONGOOSE_CONNECTION;
}
