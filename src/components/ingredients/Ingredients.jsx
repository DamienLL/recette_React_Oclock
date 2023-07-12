import "./ingredients.scss";

export default function Ingredients({ ingredientsList }) {
  return (
    <ul className="ingredientsList">
      {ingredientsList.map((ing) => (
        <>
          <li key={ing.id} className="ingredient">
            <span className="ingredient-span">
              {ing.quantity} {ing.unit}
            </span>{" "}
            {ing.name}
          </li>
          <hr />
        </>
      ))}
    </ul>
  );
}
