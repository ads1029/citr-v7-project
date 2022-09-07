import Pet from "./Pet";

const Results = ({ pets }) => {
  let comp;

  if (!pets.length) {
    comp = <h1>No Pets Found</h1>;
  } else {
    comp = pets.map((pet) => {
      return (
        <Pet
          animal={pet.animal}
          key={pet.id}
          name={pet.name}
          breed={pet.breed}
          images={pet.images}
          location={`${pet.city}, ${pet.state}`}
          id={pet.id}
        />
      );
    });
  }

  return <div className="search">{comp}</div>;
};

export default Results;
