import PropTypes from "prop-types";

export const Card = ({title, icon, children}) => {
    if (title.length > 30) {
        throw new Error(`Title "${title}" should not exceed 30 characters.`);
    }
    return (
    <div className="w3-container w3-card w3-white w3-margin-bottom">
        <h2 className="w3-text-grey w3-padding-16">
            <i className={`fa fa-fw w3-margin-right w3-xxlarge w3-text-teal ${icon}`}></i>
            {title}
        </h2>
        {children}
    </div>
    )
};
Card.propTypes = {
    title: PropTypes.string.isRequired,
};