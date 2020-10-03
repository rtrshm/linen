import React from 'react';
// import logo from 'src/logo.svg';
import './App.css';
// import * as request from 'request-promise-native';

interface Response {
    // the unique identifier for the module
    id: number,
    // the state of the module: 'active', 'deleted'
    workflow_state: string,
    // the position of this module in the course (1-based)
    position: number,
    // the name of this module
    name: string,
    // (Optional) the date this module will unlock
    unlock_at: string,
    // Whether module items must be unlocked in order
    require_sequential_progress: boolean,
    // IDs of Modules that must be completed before this one is unlocked
    prerequisite_module_ids: number[],
    // The number of items in the module
    items_count: number,
    // The API URL to retrive this module's items
    items_url: string,
    // The contents of this module, as an array of Module Items. (Present only if
    // requested via include[]=items AND the module is not deemed too large by
    // Canvas.)
    items: null,
    // The state of this Module for the calling user one of 'locked', 'unlocked',
    // 'started', 'completed' (Optional; present only if the caller is a student or
    // if the optional parameter 'student_id' is included)
    state: string
    // the date the calling user completed the module (Optional; present only if the
    // caller is a student or if the optional parameter 'student_id' is included)
    completed_at: null,
    // if the student's final grade for the course should be published to the SIS
    // upon completion of this module
    publish_final_grade: null,
    // (Optional) Whether this module is published. This field is present only if
    // the caller has permission to view unpublished modules.
    published: true,

}
// https://stackoverflow.com/questions/38428027/why-await-is-not-working-for-node-request-module
export async function http<T>(
  request: RequestInfo
): Promise<T> {
  const response = await fetch(request);
  const body = await response.json();
  return body;
}

const data = async() =>  {
  const response = await http<Response[]>(
  'sit.test.instructure.com/api/v1/courses'
  );
  return response;
}

class ModuleEntry extends React.Component {
  constructor(props: any) {
    super(props);
  }
  
  render () {
    return <p>Hello world</p>;
  }
};

function App()  {
  // useEffect(() => {
  //     // Example of how to send a message to eventPage.ts.
  //     chrome.runtime.sendMessage({ popupMounted: true });
  //   }, []);
  //   return <div className="popupContainer">Hello, world!</div>;
  // }
  return (
    <div className="App">
      <header className="App-header">
        <ModuleEntry /> 
      </header> 
    </div>
  );
}
export default App;





// {/* <p>
//   Edit <code>src/App.tsx</code> and save to reload.
// </p> */
// /* <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React */
// /* </a>} */


// function fetchModules(): Promise<any> {
// const baseUrl = 'sit.test.instructure.com/api/v1/courses/:course_id/modules';
// const response = await fetch(baseUrl);
// const body = await response.json();
//   });
// }
// }

// async function requestModules () {
  
//   var opts = {
//     method:'GET',
//     uri: baseUrl
//   }

// var response = {
//   "id":0,
//   "name": "",
// }


//   const response = await request(opts)
//     .then(response => {
//       console.log(response)
//       return (response.id)
//     })
//     .catch(error => {
//       console.timeLog("exception: " + error);
//     })
// }