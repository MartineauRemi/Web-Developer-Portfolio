import React from 'react'
import styled from 'styled-components'
import Thumbnail from '../components/Thumbnail'
import { BorderlessArrowDownButton as ArrowedButton} from '../../shared/components/Buttons'
import { projects } from '../../../data/projects'

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

export default function ProjectsThumbnailsList() {
    return (
        <List>
            {projects.map(project => <Thumbnail data={project} />)}
            <SeeMoreBtnContainer>
                <ArrowedButton label='Voir plus' borderless />
            </SeeMoreBtnContainer>
        </List>
    )
}
