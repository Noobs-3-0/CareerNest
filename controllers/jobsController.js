const createJob = (req, res) => {
  res.send("Create Job");
};

const deleteJob = (req, res) => {
  res.send("Delete Job");
};

const getAllJobs = (req, res) => {
  res.send("get all jobs details");
};

const updateJob = (req, res) => {
  res.send("update Job");
};

const showStats = (req, res) => {
  res.send("Show Stats");
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
