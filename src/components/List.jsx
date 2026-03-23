import Person from "./Person";

const List = ({ people }) => {
  return (
    <ul className="space-y-8">
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </ul>
  );
};
export default List;
