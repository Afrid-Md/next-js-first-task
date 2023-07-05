//our-domain.com/aboutus/developer


function DeveloperPage({ params }) {

  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },

    { id: 2, name: "Vaibhav", role: "Backend Developer" },

    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];



  const person = details.find((p) => p.id === Number(params.id));
  

  console.log(params);

  return (
    <>
      <h1>
        {person.name}, {person.role}
      </h1>
    </>
  );
}
export default DeveloperPage;
