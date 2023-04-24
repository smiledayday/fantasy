import { NextPage } from 'next'
import { useState } from 'react'
import styled from "@emotion/styled"
import { HeadNav, DownloadApp } from '../../components'
import { fetchAtlasDetail } from './api'
import axios from 'axios'


const Wrapper = styled.div``

const Head = styled.div`
    margin-bottom: 39px;
`

const Content = styled.div`
    width: 1000px;
    min-height: 607px;
    margin: 0 auto;
    padding-bottom: 24px;
`

const PgAtlas = styled.div`
    display: flex;
    max-width: 1000px;`

const AtlasContent = styled.div`
    width: 590px;
    border: solid 1px #dedfe0;
    min-height: 100px;
    padding: 20px;

`

const AtlasDetail = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 176px);
    gap: 10px;
    margin-top: 14px;
`

const Author = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`

const AuthorLeft = styled.div`
    display: flex;
`

const AuthorRight = styled.a`
    display: inline-block;
    width: 84px;
    height: 36px;
    border-radius: 46px;
    font-size: 18px;
    text-align: center;
    line-height: 36px;
    background-color: #ff7e7e;
    color: #fff;
`

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center;
    object-position: center;
    border-radius: 50%;
`

const VIcon = styled.div`
    position: absolute;
    width: 18px;
    height: 18px;
    right: 5px;
    bottom: 0;
    background-image: url('https://c-ssl.dtstatic.com/uploads/people/201608/25/20160825164846_kxSms.png');

`

const Name = styled.div`
    display: block;
    font-weight: 600;
    font-size: 18px;
    text-align: left;
    color: #444;
`

const FTime = styled.div`
    font-size: 12px;
    line-height: 1.5;
    font-family: -apple-system-font,PingFang SC,Helvetica Neue,Helvetica,STHeiTi,sans-serif;
    color: #666;
`

const OperateWrap = styled.div``



const AtlasDesc = styled.div`
    font-size: 18px;
    color: #444;
    word-break: break-all;
`

const SideBar = styled.div``

type Auth = {
    name: string,
    avatar: string,
}

type Detail = {
    photos: string[]
    desc: string
    create_time: string;
}
type Data = {
    auth: Auth,
    detail: Detail,
}

type AtlasProp = {
    data: Data
}

const Atlas: NextPage<AtlasProp> = ({ data }) => {

    const [single, isSingle] = useState(false)
    const { auth, detail } = data
    // axios.get('/napi/vienna/atlas/detail/', { params: { atlas_id: 132144594 } }).then((res) => {
    //     console.log(res);
        
    // })

    // const data1 = fetchAtlasDetail({ atlas_id: 132144594})
    // console.log(data1);

    return <Wrapper>
        <Head>
            <HeadNav />
        </Head>
        <Content>
            <DownloadApp />
            <PgAtlas>
                {/* 两部分 图片展示区域和右侧专辑信息区域 */}
                <AtlasContent>
                    <Author>
                        <AuthorLeft>
                            <Avatar src={auth.avatar}></Avatar>

                            <div style={{ marginLeft: '8px'}}>
                                <Name>{auth.name}</Name>
                                <FTime>{detail.create_time}</FTime>
                            </div>
                        </AuthorLeft>
                        <AuthorRight>关注</AuthorRight>
                    </Author>
                    <AtlasDesc>{detail.desc}</AtlasDesc>
                    <AtlasDetail>
                        {detail.photos.map((item, index) => <img src={item} key={index}></img>)}
                    </AtlasDetail>
                </AtlasContent>
                <SideBar></SideBar>
            </PgAtlas>
        </Content>
    </Wrapper>
}

Atlas.getInitialProps = async () => {
    // axios.get('/napi/vienna/atlas/detail/', { params: { atlas_id: 132144594 } }).then((res) => {
    //     console.log(res);
        
    // })
    // const data1 = await fetchAtlasDetail({ atlas_id: 132144594})
    // console.log(data1);
    const data = {
        auth: {
            name: 'gyh',
            avatar: 'https://d-ssl.dtstatic.com/uploads/blog/202104/16/20210416170347_5479d.thumb.300_300_c.jpeg_webp'
        },
        detail: {
            create_time: '2023.4.22',
            desc: '郭雨虹是全天下最棒的女生！',
            photos: ['https://d-ssl.dtstatic.com/uploads/blog/202104/16/20210416170347_5479d.thumb.300_300_c.jpeg_webp', 'https://d-ssl.dtstatic.com/uploads/blog/202104/16/20210416170347_5479d.thumb.300_300_c.jpeg_webp', 'https://d-ssl.dtstatic.com/uploads/blog/202104/16/20210416170347_5479d.thumb.300_300_c.jpeg_webp']
        }
    }
    return { data }
}

export default Atlas