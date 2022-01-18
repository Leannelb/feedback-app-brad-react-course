import PropTypes from 'prop-types';

function Card({ children, reverseProp }) {
    
    return (
        // CONDITIONAL CLASS
        //<div className={`card ${reverseProp && 'reverse'}`}>{ children }</div>
        
        // CONDITONAL STYLING
        <div className="card"
            style={{
                backgroundColor: reverseProp ? 'rgba(0,0,0,0.4)' : '#fff',
                color: reverseProp ? '#fff' : 'rgba(0,0,0)',  }}>
            { children }
        </div>
    )
}

Card.defaultProps = {
    reverse: false
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}

export default Card
