const Total = ({ parts }) => {
  return (
    <h3>
      Total of{" "}
      {parts
        .map((part) => part.exercises)
        .reduce((acc, exercise) => acc + exercise, 0)}{" "}
      exercises
    </h3>
  );
};

export default Total;
