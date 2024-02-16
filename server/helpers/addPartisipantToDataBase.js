import Event from "../models/Event.js";

export const addPartisipantToDataBase = async (customerMetadata) => {

  const { firstName, lastName, age, distance, email, eventId, gender } = customerMetadata;
  
  try {
    await Event.findByIdAndUpdate(
      eventId,
      {
        $push: {
          participants: {
            firstName,
            lastName,
            age,
            email,
            gender,
            distance,
          },
        },
      },
      { new: true }
    );
    console.log("New participant is added");
  } catch (error) {
    console.error("Stripe add participant error");
  }
};