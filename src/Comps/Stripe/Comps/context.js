import React, { useState, useContext } from 'react'
import sublinks from './data'


const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [isUserOpen, setIsUserOpen] = useState(false);
    const [location, setLocation] = useState(null);
    const [page, setPage] = useState({ page: '', links: [] })

    const openSidebar = () => {
        setIsSidebarOpen(true)
        setIsUserOpen(true)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    const openSubmenu = (text, center) => { 
        // first we create the open submenu fn
        // we get the center coordinates to set the location and that location will be received by submenu
        // we get the text parameter, which is the page sent in opensubmenu in navbar
        setIsSubmenuOpen(true);
        setLocation(center);
        const pageMatching = sublinks.find(link => {
            return link.page === text
        })
        setPage({page: pageMatching.page, links: pageMatching.links})
    }

    const displayUser = () => {
        console.log(isUserOpen)
        setIsUserOpen(!isUserOpen)
        console.log(isUserOpen)
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
        console.log(isSubmenuOpen)
    }

    const providerValue = {
        isSidebarOpen,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        openSidebar,
        closeSidebar,
        location,
        page,
        displayUser,
        isUserOpen
    }

    return (
        <AppContext.Provider value={providerValue}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}


export { AppProvider, useGlobalContext }

