import "./instructions.scss";
export default function Instructions({ instructionsList }) {
	return (
		<ul className="instructionsList">
			{instructionsList.map((instruction) => (
				<li>{instruction}</li>
			))}
		</ul>
	);
}
