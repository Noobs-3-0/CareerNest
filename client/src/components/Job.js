import moment from "moment";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useAppContext } from "../context/appContext";
import Wrapper from '../assets/wrappers/Job';
import JobInfo from './JobInfo';



const Job = ({
    _id, 
    position, 
    company,
    jobLocation, createdBy,
    createdAt, 
    jobType, 
    applications}) =>{

const {user,setEditJob, deleteJob,applyForJob} = useAppContext()
//const user = localStorage.getItem("user");
const hasApplied = applications.includes(user._id);
const isCreator = createdBy.toString() === user._id.toString();
    let date=moment(createdAt)
    date=date.format('MMM Do, YYYY')

    return (
      <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
            <h5>{position}</h5>
    
            <p>{company}</p>
        </div>
        </header>
        <div className="content-center">
            <JobInfo icon={<FaLocationArrow/>} text={jobLocation}/>
            <JobInfo icon={<FaCalendarAlt/>} text={date}/>
            <JobInfo icon={<FaBriefcase/>} text={jobType}/>
            {/* <div className={`status ${status}`}>{status}</div> */}

        </div>
        {/* <div>
      <h3>Applicants:</h3>
      <ul>
        {job.applications.map((user) => (
          <li key={user._id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div> */}
        <footer>
           <div className="actions">
            
           {isCreator && (
          <>
            <Link to='/edit-job' className="btn edit-btn" onClick={() => setEditJob(_id)}>
              Edit
            </Link>
            <button type='button' className="btn delete-btn" onClick={() => deleteJob(_id)}>
              Delete
            </button>
          </>
        )}
        <div>
            {!isCreator && (
          <button type='button' className="btn edit-btn" disabled={hasApplied} onClick={() => !hasApplied && applyForJob(_id)}>
            {hasApplied ? 'Applied' : 'Apply'}
          </button>
        )}
             </div> 
           </div> 
        </footer>
      </Wrapper>
    )
}

export default Job