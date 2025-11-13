import connectDB from "@/database/db";
import BlogModel from "@/database/models/blogEntry";
import Portfolio from "./portfolio/page";
import ProjectModel from "@/database/models/portfolioEntry";

export async function getPortfolio() {
  try {
    await connectDB(); // function from db.ts before
    // query for all blogs and sort by date
    const res = await ProjectModel.find().lean();
    return res;
  } catch (err: any) {
    return undefined;
  }
}
