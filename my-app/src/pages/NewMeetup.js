import { useHistory } from 'react-router-dom';

import NewMeetupForm from '../components/layout/meetups/NewMeetupForm';

function NewMeetup() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch(
      'https://react-starting-eea93-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-type': 'application/json',
        },
      }
    ).then(() => {
      history.replace('/');
    });
  }
  return (
    <section>
      <h1>Add new meetup</h1>
      <NewMeetupForm addMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetup;
