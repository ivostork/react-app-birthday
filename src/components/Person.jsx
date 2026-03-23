const Person = ({ image, name, age }) => {
  return (
    <li className="flex gap-4">
      <img
        src={image}
        alt={name}
        className="w-16 h-16 object-cover rounded-full"
      />
      <div className="flex flex-col justify-center">
        <h3 className="text-2xl">{name}</h3>
        <p className="text-gray-400">{age}</p>
      </div>
    </li>
  );
};
export default Person;
