import React from "react";
import CmsText from "../base/Text";

const PageNotFound = () => {
    return (
        <div>
            <div>
            <CmsText preset="heading" size={"xxl"}>404 Error</CmsText>
            </div>
            <div>
            <CmsText preset="heading" size={"xxl"}>Page Not Found</CmsText>
            </div>
            
        </div>
    );
};

export default PageNotFound;