

import React, { Component } from 'react';

const mainSiteUrl = '';

class HeaderComponent extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-inner container">
                    <a className="link hasIcon" href={mainSiteUrl}>
                        <img className='logo' src="https://cloudmembers.logicom.net/wp-content/uploads/2018/06/Solution-image-4.png" width="30" height="30" class="d-inline-block align-top" alt="logo" />
                        <span>HR Rental App</span>
                    </a>
                     <a class="button primary" href="/" role="button">Login</a>
                </div>
            </div>
            )
        }
    }
export default HeaderComponent