import mongoose from "mongoose";

function capitalize (val) {
  if (typeof val !== 'string') val = '';
  return val.charAt(0).toUpperCase() + val.substring(1).toLowerCase();
}


const EventSchema = new mongoose.Schema (
  { 
    name: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    participants: [{
      firstName: {
        type: String,
        trim: true,
        set: capitalize
        // required:true,
      },
      lastName: {
        type: String,
        trim: true,
        set: capitalize,
        // required: true,
      },
      age: {
        type: String,
        trim: true,
      },
      gender: {
        type: String,
      },
      email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
      },
      distance: {
        type: String,
      }
    }],
    type: {
      type: String,
      // required: true
    },
    dateOfEvent: {
      type: String,
      // required: true
    },
    addDate: String,
    sponsorsEvent: [{
      linkSite: String,
      linkImage: String
    }],
    timeOfStartEvent: String,
    addTimeStartEvent: String,
    distances: [String],
    measurement: String,
    startpoint: String,
    registration: [String],
    addRegistration: String,
    presentation: [String],
    addPresentation: String,
    payments: [String],
    paymentsNew: [{
      paymentDate: String,
      price: String
    }],
    addPayments: String,
    categoriesMale: [String],
    categoriesFemale: [String],
    addCategories: String,
  },
 
)

export default mongoose.model("Event", EventSchema)