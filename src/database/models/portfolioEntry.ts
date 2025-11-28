import { Schema, model, models } from "mongoose";

export interface ProjectDoc {
  title: string;
  link: string;
  technologies: [string];
  date_range: {
    start: string;
    end: string;
  };
  bullets: [string];
}

export const ProjectSchema = new Schema<ProjectDoc>({
  title: { type: String, required: true, trim: true },
  link: { type: String, required: true, trim: true },
  technologies: { type: [String], required: true, default: [] },
  date_range: {
    start: { type: String, required: true, trim: true },
    end: { type: String, required: true, trim: true },
  },
  bullets: { type: [String], required: true, default: [] },
});

const ProjectModel =
  models.Project ||
  model<ProjectDoc>("Portfolio", ProjectSchema, "portfolioEntries");
export default ProjectModel;
