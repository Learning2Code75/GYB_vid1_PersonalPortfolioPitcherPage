import React from 'react';
import Creation1 from '../img/my_creations/mywork1.jpg';
import Creation2 from '../img/my_creations/mywork2.jpg';
import Creation3 from '../img/my_creations/mywork3.jpg';
function MyCreations(){
	return (
		<div className="mycreations">
			<h1>My Creations</h1>
			<div className="mycreations-grid">
				<div className="mycreations-grid__item">
					<h3>Handvo (Cuisine:Indian-Gujarati)</h3>
					<div className="imgdiv"><img src={Creation1} alt="Creation1"  height="200" weight="200" /></div>
					
					<p>Handvo is a delicious Indian-Gujarati dish
						that involves almost all types of lentils.
						It is rich in protein and what not....
					 </p>
					 <a href="#">Blogpage</a>
				</div>
				<div className="mycreations-grid__item">
					<h3>Handvo (Cuisine:Indian-Gujarati)</h3>
					<div className="imgdiv"><img src={Creation2} alt="Creation2" height="200" weight="200" />
</div>					<p>Handvo is a delicious Indian-Gujarati dish
						that involves almost all types of lentils.
						It is rich in protein and what not....
					 </p>
					 <a href="#">Blogpage</a>

				</div>
				<div className="mycreations-grid__item">
					<h3>Handvo (Cuisine:Indian-Gujarati)</h3>
					<div className="imgdiv"><img src={Creation3} alt="Creation3" height="200" weight="200" />
</div>					<p>Handvo is a delicious Indian-Gujarati dish
						that involves almost all types of lentils.
						It is rich in protein and what not....
					 </p>
					 <a href="#">Blogpage</a>

				</div>
			</div>	`
		</div>
	);
}
export default MyCreations;