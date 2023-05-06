import React from 'react'

export default function Footer() {
    let fullYear = new Date().getFullYear();
    return (
        <nav style={{ backgroundColor: '#e3f2fd' }} className="navbar fixed-bottom">
            <div className="container-fluid">
                <div className="col-lg-12 text-center text-muted">
                <div>{fullYear}-{fullYear+1}, All Rights Reserved by EMS</div>
                </div>
            </div>
        </nav>
    )
}
