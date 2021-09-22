import React from 'react'
import styled from 'styled-components'
import SectionTitle from '../../shared/components/SectionTitle'
import ProjectsThumbnailsList from './ProjectsThumbnailsList'

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

export default function Portfolio() {
    return (
        <Wrapper id="portfolio">
            <Content>
                <SectionTitle
                    title="MES DERNIERS PROJETS"
                    outline="PORTFOLIO" />
                <ProjectsThumbnailsList />
            </Content>
        </Wrapper>
    )
}

