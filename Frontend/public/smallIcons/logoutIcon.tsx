
import React from 'react';

const LogoutIcon = ({ width, height }: { width: any, height: any }) => {
    return (
        <>
            <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.45455 10.8H14.1818V13.2H5.45455V16.8L0 12L5.45455 7.2V10.8ZM4.36284 19.2H7.3182C8.85668 20.6936 10.8776 21.6 13.0909 21.6C17.9109 21.6 21.8182 17.302 21.8182 12C21.8182 6.69806 17.9109 2.4 13.0909 2.4C10.8776 2.4 8.85668 3.30632 7.3182 4.8H4.36284C6.35311 1.88533 9.52185 0 13.0909 0C19.1158 0 24 5.37258 24 12C24 18.6274 19.1158 24 13.0909 24C9.52185 24 6.35311 22.1147 4.36284 19.2Z" fill="black" />
            </svg>

        </>
    );
};

export default LogoutIcon;