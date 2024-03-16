import Job from '../models/Job.js'
import { StatusCodes } from "http-status-codes";
import { BadRequestError ,NotFoundError, UnAuthenticatedError} from "../errors/index.js";
import checkPermissions from "../utils/checkPermissions.js";

const createJob = async (req, res) => {
  const {position , company} = req.body
  if( !position || !company){
    throw new BadRequestError('Please provide all the values')
  }
  req.body.createdBy = req.user.userId
  const job = await Job.create(req.body)
  res.status(StatusCodes.CREATED).json({job})
};

const deleteJob = async (req, res) => {
  const { id: jobId } =req.params 

  const job= await Job.findOne({ _id: jobId})

  if(!job){
    throw new NotFoundError(`no job with id :${jobId}`)
  }
  //checkPermissions(req.user, job.createdBy)

  await job.deleteOne()

  res.status(StatusCodes.OK).json({msg:'Success! job removed'})
  
};

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({createdBy:{ $ne: req.user.userId }})
  res.status(StatusCodes.OK).json({jobs , totalJobs : jobs.length ,numOfPages: 1})
};

const getMyJobs = async (req, res) => {
  const jobs = await Job.find({createdBy: req.user.userId })
  res.status(StatusCodes.OK).json({jobs , totalJobs : jobs.length ,numOfPages: 1})
};

const applyForJob = async (req, res) => {
  const { id:jobId } = req.params; // Assuming the job ID is passed as a URL parameter
  const userId = req.user.userId; // Assuming you have middleware that adds the authenticated user's ID to req.user

  try {
    // First, check if the user has already applied for the job
    const job = await Job.findById({_id:jobId});
    if(!job){
      throw new NotFoundError(`no job with id :${jobId}`)
    }

    // const hasAlreadyApplied = job.applications.some(application => application.equals(userId));
    // if (hasAlreadyApplied) {
    //   return res.status(400).json({ message: 'You have already applied for this job' });
    // }

    // Add the user's ID to the applications array
    job.applications.push(userId);
    await job.save();

    res.status(200).json({ message: 'Application successful' ,job:job});
  } catch (error) {
    console.error('Error applying for job:', error);
    res.status(500).json({ message: 'Failed to apply for job' });
  }
};

const updateJob = async (req, res) => {
  const {id:jobId }= req.params
  const {company, position}= req.body
  if( !position || !company){
    throw new BadRequestError('Please provide all the values')
  }
  const job= await Job.findOne({ _id: jobId})

  if(!job){
    throw new NotFoundError(`no job with id :${jobId}`)
  }

 //check permissions
//  console.log(typeof req.user.userId)
//  console.log(typeof job.createdBy)

 //checkPermissions(req.user, job.createdBy)
 
 const updatedJob= await Job.findOneAndUpdate({ _id: jobId}, req.body, 
  {
    new:true, 
    runValidators:true
  })




  res.status(StatusCodes.OK).json({job:updatedJob})
};

const showStats = (req, res) => {
  res.send("Show Stats");
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats,getMyJobs,applyForJob };
