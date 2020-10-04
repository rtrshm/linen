import React from 'react';
import Redux from 'redux';
import axios from 'axios';
import './App.css';

const API_TOKEN = "Bearer 1030~il54AVAlNZS0YRHTaJAUbxy0sSuPMcfagOoFXl1Vgvc8nZGODQuanbi7cWs9vu8e";
const ADD = 'ADD';

interface announcementData {
  context_code: string,
  message: string
}

interface Action {
  type: string;
  content ?: announcementData;
}

const store = Redux.createStore(
  (state = {announcements: []}) => state,
);

const requestAnnouncements = async () => {
  try {
    const response = await apiClient.get('/api/v1/announcements');
    const announcement = {
      context_code: response
    }
    ;
  } catch (err) {
    throw err;
  }
}

const reducer = (state = {announcements:[]}, action: Action) => {
  switch (action.type) {
    case ADD:
      return {
        state: [...state.announcements, action.content]
      }
  }
}

const addAnnouncement = (announcement: Announcement) => {
  return {
    type: ADD,
    content: announcement}
  };

class Announcement extends React.Component {
  context_code: string;
  message: string;

  constructor(props: announcementData) {
    super(props);
    this.context_code = props.context_code;
    this.message = props.message;
  }



  render() {
    return <p>{this.context_code}: {this.message}</p>;
  }
}

const apiClient = axios.create({
  baseURL: "sit.test.instructure.com",
  responseType: 'json',
  headers: {
    'Authorization': API_TOKEN,
    'Content-Type': 'application/json'
  }
});


function App() {
  return (
    <div className="App">
      yo
    </div>
  );
}

export default App;
