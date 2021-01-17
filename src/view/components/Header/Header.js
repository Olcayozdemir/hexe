import React from 'react'
import { HeaderWrapper } from './Header.styled'

const Header = () => {
    return (
        <HeaderWrapper margin="50">
            <img src="https://f4.bcbits.com/img/0021018565_10.jpg" alt="hexe-logo" />
            <ul>
                <li><a href="/about" data-content="About">About</a></li>
                <li><a href="/artists" data-content="Artists">Artists</a></li>
                <li><a href="/releases" data-content="Releases">Releases</a></li>
                <li><a href="/events" data-content="Events">Events</a></li>
            </ul>
        </HeaderWrapper>
    )
}

export default Header
