import {MouseEvent} from 'react'

export const navigateTo = (href:string) => (e:MouseEvent) => {
    e.preventDefault();
    window.location.href = href;
}