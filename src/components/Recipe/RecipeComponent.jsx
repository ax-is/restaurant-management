import './Recipe.css';
import image1 from '../../media/recipe.png';
function RecipeComponent() {
    return (
        <div className="recipe-main">
            <img src={image1} alt='recipe' />
            <div className='recipe-content'>
                <h1>Subscribe to good food every week</h1>
                <p>The easiest way to enjoy chef-prepared meals every week is to subscribe. Customize your menu as often as you’d like, or set your meal plan on autopilot. We prep, cook, and deliver so you can skip straight to enjoying.</p>
                <button className='learn-more'>Learn More</button>
            </div>
        </div>
    )
}
export default RecipeComponent;