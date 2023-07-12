import "./header.scss";
export default function Header({ title, thumbnail, author, difficulty }) {
	return (
		<header>
            <img src={thumbnail} alt="crepes_thumbnail" className="header-img" />
			
            <div className="header-content">
            
            <h1 className="header-content-title">{title}</h1>
            
            <p className="header-content-text">
                {author} - {difficulty}
            </p>
            
            </div>
		
        </header>
	);
}
