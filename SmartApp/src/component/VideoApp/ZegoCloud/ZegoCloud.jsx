import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useLocation, useParams } from 'react-router-dom';

const ZegoCloud = () => {
  const {id} = useParams();
  const location = useLocation();
  const {username} = location.state;

  const myMeeting = async(element)=> {
    const appID = 923977850;
    const serverSecret = "36f82b9668cad6cba31f0837fa30ece8";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id, Date.now().toString(),  username);

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element ,
      scenario: {
        mode : ZegoUIKitPrebuilt.VideoConference
      }
    })
  }
  return (
    <div>
      <h1>This is ZegoCloud</h1>
      <p>Room id -: {id}</p>
      <p>Username -: {username}</p>
      <div ref={myMeeting} />
    </div>
  )
}

export default ZegoCloud
