import {
  createJob,
  updateJob,
  deleteJob,
  getAllJobs,
  showStats,
  getMyJobs,
  applyForJob,
} from "../controllers/jobsController.js";

import express from "express";
const router = express.Router();

router.route("/").post(createJob).get(getAllJobs);
router.route("/stats").get(showStats);
router.route("/:id").delete(deleteJob).patch(updateJob).post(applyForJob);
router.route("/myJobs").get(getMyJobs)
//router.route("/:jobId/apply").post(applyForJob)

export default router;
