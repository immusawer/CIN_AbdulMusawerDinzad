
import React from 'react';

const PhoneIcon = ({ width, height }: { width: any, height: any }) => {
    return (
        <>
            <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.25 20.525V24.9451C26.25 25.6014 25.7426 26.1459 25.0881 26.1921C24.5414 26.2307 24.0954 26.25 23.75 26.25C12.7042 26.25 3.75 17.2958 3.75 6.25C3.75 5.90464 3.76931 5.45859 3.80794 4.91188C3.85421 4.25735 4.39867 3.75 5.05482 3.75H9.47513C9.79598 3.75 10.0647 3.99303 10.0969 4.31225C10.1258 4.59884 10.1527 4.82892 10.1776 5.00252C10.4304 6.7684 10.9469 8.4492 11.6859 10.0038C11.8045 10.2533 11.7271 10.552 11.5023 10.7126L8.80444 12.6398C10.4469 16.4764 13.5236 19.5531 17.3602 21.1956L19.2839 18.5024C19.4465 18.2749 19.7487 18.1966 20.0012 18.3165C21.5557 19.0549 23.2364 19.5708 25.002 19.823C25.1745 19.8478 25.4031 19.8744 25.6877 19.9031C26.007 19.9354 26.25 20.2041 26.25 20.525Z" fill="black" />
            </svg>

        </>
    );
};

export default PhoneIcon;