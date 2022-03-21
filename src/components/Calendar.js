import React from 'react'
import { PortionHolder } from "./PortionHolder"
import { Weekday } from "./Weekday"
import { RecipePlaceholder } from './RecipePlaceholder'
import { Logo } from './Logo'
import { Metadata } from './Metadata'

export const Calendar = () => {
    return <>
    <div id='caledarGrid'>
        <div id="metadata">
            <Metadata />
        </div>
        <div id="days">
            <Logo />
            <Weekday day="Monday"/>
            <Weekday day="Tuesday"/>
            <Weekday day="Wednesday"/>
            <Weekday day="Thursday"/>
            <Weekday day="Friday"/>
            <Weekday day="Saturday"/>
            <Weekday day="Sunday"/>
        </div>
        <div id="portions">
            <PortionHolder portion="Lunch" />
            <RecipePlaceholder />
            <RecipePlaceholder />
            <RecipePlaceholder />
            <RecipePlaceholder />
            <RecipePlaceholder />
            <RecipePlaceholder />
            <RecipePlaceholder />
            <PortionHolder portion="Dinner" />
            <RecipePlaceholder />
            <RecipePlaceholder />
            <RecipePlaceholder />
            <RecipePlaceholder />
            <RecipePlaceholder />
            <RecipePlaceholder />
            <RecipePlaceholder />
        </div>
    </div>
    </>
}

