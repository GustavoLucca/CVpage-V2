export const CustomLink4 = ({href, display_text}) => (
    <div className="child w3-margin-top w3-margin-bottom">
        <a href = {`${href}`}
           target="_blank">
            <div className="w3-container w3-card w3-white child1">
                <h2 style={{blockSize: '70px', width: '100%', height: '100%',}}
                    className="w3-text-grey w3-padding-16"><i
                    className="fa fa-file-excel-o fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>{display_text}</h2>
                <div className="w3-container">
                    <h5 className="w3-opacity"><b>
                    </b></h5>
                </div>
            </div>
        </a>
    </div>
);