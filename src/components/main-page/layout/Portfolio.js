import React from 'react'
import styled from 'styled-components'
import SectionTitle from '../../shared/components/SectionTitle'
import Thumbnail from '../components/Thumbnail'
import thumbnail from '../../../assets/main-page/audiophile-preview.jpg'
import { BorderlessArrowDownButton as ArrowedButton} from '../../shared/components/Buttons'

const Wrapper = styled.section`
    width: 100%;
    display: grid;
    padding: var(--v-padding) var(--h-padding);
`

const Content = styled.div`
    place-self: center;
    max-width: var(--layout-max-width);
    width: 100%;
    display: grid;
    row-gap: var(--v-padding);
`
const List = styled.div`
    width: 100%;
    display: grid;
    row-gap: 2rem;
    position: relative;

    @media screen and (min-width: 768px){
        grid-template-columns: repeat(2, auto);
        column-gap: 2rem;
    }
`

const SeeMoreBtnContainer = styled.div`
    position: absolute;
    bottom: -7.5rem;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function Portfolio() {
    return (
        <Wrapper id="portfolio">
            <Content>
                <SectionTitle
                    title="MES DERNIERS PROJETS"
                    outline="PORTFOLIO" />
                <List>
                    <Thumbnail
                        thumbnail={thumbnail} />
                    <Thumbnail
                        thumbnail={thumbnail} />
                    <Thumbnail
                        thumbnail={thumbnail} />
                    <Thumbnail
                        thumbnail={thumbnail} />
                    <SeeMoreBtnContainer>
                        <ArrowedButton label='Voir plus' borderless />
                    </SeeMoreBtnContainer>
                </List>
            </Content>
        </Wrapper>
    )
}

