import { useEffect, useState } from 'react';
import { db } from './firebase-config';
import _ from 'lodash';
import './App.css';
import Card from './card';

const App = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    try {
      (async () => {
        const data = (await db.ref('ce_jobs/elementary/HNXHyMcFiPQGLEKl4UHZwYZADS52').get());
        console.log(data.val())
        setJobs(_.values(data.val()))
      })();
    } catch (err) {
      console.log('[ERROR]', err);
    }
  }, [])


  return (
    <>
      <div className="row">
        {jobs.length && jobs.map((val, key) => {
          return (
            <div className="col-lg-4 col-md-2 col-sm-12 col-xs-12" key={key}>
              <Card data={val}/>
            </div>
          )
        })}
      </div>
    </>
  );
}

export default App;
