import React from "react";
import styled from "styled-components";

const StyledErrorView = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    user-select: none;
`;

const StyledTitle = styled.h2`
    color: ${({ theme }) => theme.TEXT_DANGER};
`;

const StyledInfo = styled.p`
    width: 60%;
    text-align: center;
    color: ${({ theme }) => theme.TEXT_NORMAL};
`;

export const ErrorView = () => {
    (window.parent as any)?.onThumbnail?.("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");
    return (
        <StyledErrorView>
            <img src="./assets/undraw_qa_engineers_dg-5-p.svg" width="200" height="200" alt="oops" draggable="false" />
            <StyledTitle>{i18next.t("error.fileSizeExceeded.title")}</StyledTitle>
            <StyledInfo>{i18next.t("error.fileSizeExceeded.message")}</StyledInfo>
        </StyledErrorView>
    )
};
