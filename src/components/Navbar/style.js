import styled from 'styled-components';

export const Container = styled.div`

background: var(--white);
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top: 0;
z-index: 999;
width: 100%;
border: 0 solid;

img {
    border: 0;
    padding: 10px;
    vertical-align: middle;
    display: inline-block;
}

.navbar-container {
    display: flex;
    justify-content: space-between;
    height: 80px;
}

.container {
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;
}

.navbar-logo {
    color: var(--white);
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
}

.navbar-icon {
    margin-right: 0.5rem;
}

.nav-menu {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    text-align: center;
    justify-content: end;
}

.nav-item {
    height: 80px;
    border-bottom: 2px solid transparent;
}

/* .nav-item:hover {
    border-bottom: 2px solid var(--secondary);
} */

.nav-links {
    color: var(--dark);
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
}

.nav-links:hover {
    color: var(--secondary);
    transform: scale(1.2);
    transition: all 0.5s ease;
}

.fa-bars {
    color: var(--white);
}

.menu-icon {
    display: none;
}

@media screen and (max-width: 960px) {
    .NavbarItems {
        position: relative;
    }

    .nav-menu {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: -100%;
        opacity: 1;
        transition: all 0.5s ease;
    }

    .nav-menu.active {
        background: var(--background);
        left: 0;
        opacity: 1;
        transition: all 0.6s ease;
        z-index: 1;
    }

    .nav-links {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;
    }

    .nav-links:hover {
        color: var(--secondary);
        transform: scale(1.2);
        transition: all 0.3s ease;
    }

    .nav-item:hover {
        border: none;
    }

    .nav-item {
        width: 100%;
    }

    .navbar-logo {
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(25%, 50%);
    }

    .menu-icon {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }

    .fa-times {
        color: var(--white);
        font-size: 2rem;
    }

    .nav-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 120px;
    }
}
`