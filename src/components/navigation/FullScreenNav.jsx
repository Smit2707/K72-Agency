import React from 'react'

const FullScreenNav = () => {
    return (
        <div id='fullscreennav'>
            <div id='all-links'>
                <div className='link'>
                    <h2>Work</h2>
                    <div>
                        <div>
                            <h3>See everything</h3>
                            <img src="/assets/fullscreen-nav/work1.jpg" alt="" />
                            <h3>See everything</h3>
                            <img src="/assets/fullscreen-nav/work1.jpg" alt="" />
                        </div>
                        <div>
                            <h3>See everything</h3>
                            <img src="/assets/fullscreen-nav/work1.jpg" alt="" />
                            <h3>See everything</h3>
                            <img src="/assets/fullscreen-nav/work1.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Agency</h2>
                    <div>
                        <h3>Know Us</h3>
                    </div>
                </div>
                <div>
                    <h2>Contact</h2>
                    <div>
                        <h3>Send Us A Fax</h3>
                    </div>
                </div>
                <div>
                    <h2>Blog</h2>
                    <div>
                        <h3>Read Articles</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullScreenNav