import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meet up",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/74/Adelaide_%28AU%29%2C_Botanic_Garden_--_2019_--_0668.jpg",
    address: "Some address 5, 12345 some city",
    description: "This is first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meet up",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Adelaide_%28AU%29%2C_Barr_Smith_Library_--_2019_--_0677.jpg/1280px-Adelaide_%28AU%29%2C_Barr_Smith_Library_--_2019_--_0677.jpg",
    address: "Some address 10, 6789 some city",
    description: "This is Second meetup!",
  },
];

function HomePage(props) {

  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context){

//   const req = context.req
//   const res = context.res

//   return{
//     props : {
//       meetups : DUMMY_MEETUPS
//     },
//   }
// }

export async function getStaticProps(){

  const client = await MongoClient.connect(
    "mongodb+srv://afridmd001:mongodbUser2000@cluster0.rjwist1.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const dataBase = client.db();

  const meetupsCollections = dataBase.collection('meetups');

  const meetups = await meetupsCollections.find().toArray();

  return{
    props : {
      meetups : meetups.map((meetup) => ({
        id : meetup._id.toString(),
        title : meetup.title,
        image : meetup.image,
        description : meetup.description,
        address : meetup.address
      }))
    },
    revalidate : 1
  }
}

export default HomePage;
