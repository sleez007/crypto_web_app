import React from 'react';

export default function downloadBanner() {
  return (
    <div className="download-banner flex">
        <div className="download-banner__text flex">
            <div className="cancel">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="css-ew2l8i"><path fillRule="evenodd" clipRule="evenodd" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-7.233 0l3.006 3.005-1.768 1.768L12 13.767l-3.005 3.005-1.768-1.768 3.005-3.005-3.005-3.005 1.768-1.767L12 10.23l3.005-3.005 1.768 1.767L13.767 12z" fill="currentColor"></path></svg>
            </div>
            <div>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width="34" height="34" rx="4" fill="black"/>
                    <rect x="4" y="4" width="27" height="26" fill="url(#pattern0)"/>
                    <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0" transform="translate(-0.000143554) scale(0.00248828)"/>
                    </pattern>
                    <image id="image0" width="402" height="387" xlinkHref="data:image/png;base64,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"/>
                    </defs>
                </svg>
            </div>
            <div>
                <h3>Binance App</h3>
                <p>Secure, Fast and Elegant</p>
            </div>
        </div>
        <div className="download-banner__cta">
            <button className="btn btn--primary">Open</button>
        </div>
    </div>
  );
}