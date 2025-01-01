import profilePic from './assets/pp.png';

function Card (){

    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="My profile picture" />
            <h2 className='card-title'>Roch APETOH</h2>
            <p className='card-text'>I'm a skilled software developer</p>
        </div>
    )
}

export default Card;