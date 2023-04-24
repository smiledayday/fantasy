import styled from "@emotion/styled"
import { FC } from "react"

const Mask = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .6);
    display: flex;
    align-items: center;
    justify-content: center;
`

const Content = styled.div`
    width: 484px;
    position: relative;
    display: inline-block;
    background-color: #fff;
    border: #b0b0b0;
    -webkit-box-shadow: 0 2px 8px rgba(0,0,0,.2), 0 0 5px rgba(0,0,0,.2);
    box-shadow: 0 2px 8px rgba(0,0,0,.2), 0 0 5px rgba(0,0,0,.2);
    border-radius: 4px;
`

const TopNav = styled.div`
    height: 46px;
    padding: 0;
    font-size: 16px;
    font-weight: 700;
    line-height: 46px;
    border-bottom: 1px solid #ebebeb;
    overflow: hidden;
    color: #606060;
    text-align: center;
    position: relative;
`

const TopTitle = styled.span`
    font-size: 16px;
    font-weight: 700;
    line-height: 46px;
`

const CloseIcon = styled.img`
    width: 46px;
    height: 46px;
    line-height: 46px;
    text-indent: -9999px;
    background-image: url(https://c-ssl.dtstatic.com/uploads/people/201506/17/20150617215527_JyACa.png);
    background-repeat: no-repeat;
    background-position: 15px 15px;
    position: absolute;
    right: 0;
    top: 0;
`

const Bottom = styled.div`
    padding-bottom: 32px;
`

const UploadImg = styled.div`
    width: 420px;
    height: 220px;
    margin: 32px 0 0 32px;
    text-align: center;
    background: #fafafa url(https://c-ssl.dtstatic.com/uploads/files/201309/18/20130918110017_PctN5.png) 0 0 no-repeat;
`

interface MulPicturesUploadProp {
    closeMask: () => void;
}

export const MulPicturesUpload: FC<MulPicturesUploadProp> = ({ closeMask }) => {
    return <Mask>
        <Content>
            <TopNav>
                <TopTitle>上传图片</TopTitle>
                <CloseIcon onClick={closeMask} />
            </TopNav>
            <Bottom>
                <UploadImg />
            </Bottom>
        </Content>
    </Mask>
}