import { useEffect, useState } from "react";
import { db } from './firebase-config';
import _ from 'lodash';


const Card = ({data}) => {
 const [appilcants, setApplicants] = useState([]);

  useEffect(() => {
    try {
      (async () => {
        const _data = (await db.ref('ce_job_applications').orderByChild('jobId').equalTo(data.key).get());
        console.log("[APPLICANTS]", _.values(_data.val()));
        setApplicants(_.values(_data.val()));
      })();
    } catch(err) {
      console.log('[ERROR]', err);
    }
  }, [])


  return ( 
    <div className="card mx-auto my-3" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{data.jobName}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{data.key}</h6>
        <p className="card-text text-truncate">{data.description}</p>
        <span>Not of applicants: {appilcants.length}</span>
      </div>
    </div>
  );
}
 
export default Card;