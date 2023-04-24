import styled from "@emotion/styled"
import { useState } from "react"
import { MulPicturesUpload } from "./MulPicturesUpload"
// import { DtIcon } from "@duitang/dt-react-mobile"

const Wrapper = styled.div`
    height: 64px;
    background-color: #fff;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 200px;
    i {
        display: inline-block;
        background-image: url('https://c-ssl.dtstatic.com/uploads/item/201806/29/20180629110754_KHawy.png');
        background-repeat: no-repeat;
    }
`

const Logo = styled.div`
    float: left;
    width: 79px;
    height: 64px;
    background-image: url(https://c-ssl.dtstatic.com/uploads/item/201806/19/20180619182220_KLEPM.png);
    background-position: 0 12px;
    background-repeat: no-repeat;
    text-indent: -9999px;
`

const Category = styled.div`
    float: left;
    position: relative;
    width: 74px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #fff;
    border: 1px solid #cdcdcd;
    cursor: pointer;
    border-radius: 44px;
    margin-left: 22px;
    i {
        overflow: hidden;
        display: inline-block;
        width: 10px;
        height: 10px;
        margin-left: 4px;
        vertical-align: sub;
        background-position: -59px -17px;
    }
    &:hover {
        background-color: #fff5f5;
        border-color: #ff7e7e;
        color: #ff7e7e;
        i {
            vertical-align: middle;
            background-position: -38px -15px;
        }
    }
`

const CategoryList = styled.div`
    position: absolute;
    top: 46px;
    left: -101px;
    width: 290px;
    height: 275px;
    background-color: #fff;
    box-shadow: 0 4px 4px 0 rgba(193,193,193,.28);
    font-size: 13px;
`

const Search = styled.div`
    margin-left: 52px;
    border: 1px solid #ff7e7e;
    border-radius: 20px;
    position: relative;
    position: relative;
    background-color: #fff;
    border-radius: 20px;
`

const SearchInput = styled.input`
    padding: 0 4px 0 10px;
    width: 220px;
    height: 30px;
    line-height: 30px;
    border: 0 none;
    border-radius: 20px;
    &::-webkit-input-placeholder {
        color: #aaa;
    }
    &:focus {
        background-color: #fff;
        border: 0 none;
        outline: 0;
    }
`

const SearchButton = styled.button`
    position: absolute;
    top: 0px;
    right: -1px;
    width: 42px;
    height: 30px;
    outline: 0;
    border: 0 none;
    background-color: #ff7e7e;
    background-image: url('https://c-ssl.dtstatic.com/uploads/item/201806/04/20180604174931_4sKYz.png');
    background-position: -143px -3px;
    border-radius: 0 20px 20px 0;
    cursor: pointer;
`

const UploadBtn = styled.div`
    display: block;
    float: right;
    width: 78px;
    height: 30px;
    background: #ff7e7e;
    border-radius: 44px;
    font-size: 16px;
    color: #fff;
    text-decoration: none;
    text-align: center;
    line-height: 30px;
    i {
        display: inline-block;
        margin-right: 5px;
        width: 13px;
        height: 13px;
        vertical-align: baseline;
        background-position: -12px -13px;
    }
`

const LiveHome = styled.div`
    padding: 16px 20px;
    text-decoration: none;
    border-radius: 4px;
    font-size: 16px;
    color: #777;
    &:hover {
        background-color: #f5f5f5;
    }
`

const MessageList = styled.div`
    display: inline-block;
    margin-top: 3px;
    width: 52px;
    height: 58px;
    border-radius: 4px;
    font-size: 16px;
    line-height: 58px;
    color: #777;
    &:hover {
        background-color: #f5f5f5;
    }
`

const AccountInfo = styled.div`
    text-align: center;
    text-decoration: none;
    overflow: hidden;
    display: block;
    height: 64px;
    line-height: 64px;
    font-size: 13px;
    color: #444;
`

const NickName = styled.div`

`

const Hot = styled.a`
    background-image: linear-gradient(to left,#ffba8c,#ff8377);
    padding-left: 12px;
    width: 103px;
    height: 38px;
    display: inline-block;
    border-radius: 4px;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    line-height: 38px;
    text-align: left;
    &:hover {
    text-decoration: none;
    }
`

const List = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 64px);
    gap: 0.28rem;
    padding: 20px 8px;
    overflow: hidden;
    a {
        display: inline-block;
        border-radius: 4px;
        font-size: 12px;
        text-decoration: none;
        color: #444;
        line-height: 29px;
        text-align: center;
        &:hover {
        background: #f5f5f5;
        text-decoration: none;
        }
    }
`

const SearchTipList = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: #fff;
    top: 47px;
    left: -1px;
    border: 1px solid #ebebeb;
    box-shadow: 0 4px 4px 0 rgba(193,193,193,.28);
    div {
        margin: 3px;
        height: 17px;
        display: flex;
        align-items: center;
        width: 242px;
        padding: 15px 7px;
        cursor: pointer;
        color: #444;
        font-size: 12px;
        border-radius: 4px;
        &:hover {
            background-color: #f5f5f5;
        }
    }
`

const SearchWords = styled.span`
    color: red;
    margin: 3px;
`


export const HeadNav = () => {

    const [categoryShow, setCategoryShow] = useState(false)

    const [messageListShow, setMessageListShow] = useState(false)

    const [searchTip, setSearchTip] = useState(false)

    const [searchWords, setSearchWords] = useState('')

    const [uploadShow, setUploadShow] = useState(false)


    const listenSearchWord = (e: any) => {
        setSearchWords(e.target.value)
        if (e.target.value) {
            setSearchTip(true)
        } else {
            setSearchTip(false)
        }

    }
    return <Wrapper>
        <Logo />
        <Category onMouseEnter={() => setCategoryShow(true)}>
            分类
            <i></i>
            {categoryShow ? <CategoryList onMouseLeave={() => setCategoryShow(false)}>
                <Hot href="https://www.duitang.com/topics/">
                    热门推荐
                </Hot>
                <List>
                    <a href="/category/?cat=celebrity">爱豆</a>
                    <a href="/category/?cat=wallpaper">壁纸</a>
                    <a href="/category/?cat=avatar">头像</a>
                    <a href="/category/?cat=emoticon">表情</a>
                    <a href="/category/?cat=movie_music_books">影视</a>
                    <a href="/category/?cat=animation">动漫</a>
                    <a href="/category/?cat=gif">动图</a>
                    <a href="/category/?cat=material">素材</a>
                    <a href="/category/?cat=moe">萌宠</a>
                    <a href="/category/?cat=painting">绘画</a>
                    <a href="/category/?cat=diy">手工</a>
                    <a href="/category/?cat=fashion">穿搭</a>
                    <a href="/category/?cat=beauty">美妆</a>
                    <a href="/category/?cat=wedding">婚礼</a>
                    <a href="/category/?cat=food">美食</a>
                    <a href="/category/?cat=home">家居</a>
                    <a href="/category/?cat=travel">旅行</a>
                    <a href="/category/?cat=photography">摄影</a>
                    <a href="/category/?cat=plant">植物</a>
                    <a href="/category/?cat=tips">生活百科</a>
                    <a href="/category/?cat=art">人文艺术</a>
                    <a href="/category/?cat=design">设计</a>
                    <a href="/category/?cat=chinoiserie">古风</a>
                </List>
            </CategoryList> : null}
        </Category>
        <Search>
            <SearchInput placeholder="搜索感兴趣的内容" onChange={listenSearchWord} />
            <SearchButton></SearchButton>
            {searchTip ?
                <SearchTipList>
                    <div>
                        搜索含<SearchWords>{searchWords}</SearchWords>的图片
                    </div>
                    <div>
                        搜索含<SearchWords>{searchWords}</SearchWords>的商品
                    </div>
                    <div>
                        搜索含<SearchWords>{searchWords}</SearchWords>的专辑
                    </div>
                    <div>
                        搜索含<SearchWords>{searchWords}</SearchWords>的文章
                    </div>
                    <div>
                        搜索含<SearchWords>{searchWords}</SearchWords>的达人
                    </div>
                </SearchTipList> : null}
        </Search>

        <UploadBtn onClick={() => setUploadShow(true)}>
            <i></i>
            发布
        </UploadBtn>

        <LiveHome>堆糖生活家</LiveHome>
        <LiveHome onMouseEnter={() => setMessageListShow(true)} onMouseLeave={() => { setMessageListShow(false) }}>
            消息
            {messageListShow ? <></> : null}
        </LiveHome>
        <img src={'https://c-ssl.dtstatic.com/uploads/item/201806/29/20180629110754_KHawy.png'} style={{ width: '36px', height: '36px', borderRadius: '50%' }}></img>
        <NickName></NickName>
        <AccountInfo>
        </AccountInfo>

        {uploadShow ? <MulPicturesUpload closeMask={() => setUploadShow(false)}></MulPicturesUpload> : null}
    </Wrapper>
}