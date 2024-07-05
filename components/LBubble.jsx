import PropTypes from "prop-types";
export const LBubble = ({title, description}) => {
    if (title.length > 30) {
        throw new Error(`Title "${title}" should not exceed 30 characters.`);
    }
    return(
    <div>
        <p>{title}</p>
        <p className="w3-light-grey w3-round-xlarge w3-medium">{description}</p>
    </div>
    )
};

LBubble.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string
};