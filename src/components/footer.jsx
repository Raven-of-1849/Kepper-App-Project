import React from 'react';


const thisYear = new Date().getFullYear();

function footerElement() {
    return (
        <footer>
            <p>Copyright &copy; {thisYear}</p>
        </footer>
)}
    export default footerElement
