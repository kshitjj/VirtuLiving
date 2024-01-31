import React from 'react';

function SocialTray(){
    return(
        // put shit here
        <>Socials Trays</>
    )
}

export default function Footer(){
    return(
        <div className='footer'>
            <SocialTray />
            © VirtuLiving Systems 2023-2024
            <div className='policyTray'>
                <button>Privacy Policy</button>
                <button>Cookie Policy</button>
                <button>Cookie Settings</button>
            </div>
        </div>
    )
}