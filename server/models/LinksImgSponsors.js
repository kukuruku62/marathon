import mongoose from "mongoose";


const LinksImgSponsorsSchema = new mongoose.Schema (
  {
      linkSite: String,
      linkImage: String
  }
)

export default mongoose.model("LinksImgSponsors", LinksImgSponsorsSchema)