
import MeetupDetails from "../../components/meetups/MeetupDetails";

function MeetupDetailsPage(){
    return(
        <MeetupDetails
            image ="https://upload.wikimedia.org/wikipedia/commons/7/74/Adelaide_%28AU%29%2C_Botanic_Garden_--_2019_--_0668.jpg" 
            title='A First meet up'
            address='Some street 12345, Some city'
            description='The meetup description'
        />
    )
}
export default MeetupDetailsPage;