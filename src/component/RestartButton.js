import React, {useMemo} from "react";
import * as PropTypes from "prop-types";

const RestartButton = ({onClick, seconds}) => {

    return useMemo(() => {

        console.log('re-render');

        return (
            <button type="button"
                    style={{padding: "8px"}}
                    onClick={onClick}
            >
                Restart Timer {seconds}
            </button>
        )
    }, []);
};

RestartButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    seconds: PropTypes.number.isRequired
};

export default RestartButton;