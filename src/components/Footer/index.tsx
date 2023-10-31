import React from "react";

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
    height : '100%',
};

const MyFooter = () => {
    return (
        <div style={footerStyle}>
            底部
        </div>
    )
}

export default MyFooter;
