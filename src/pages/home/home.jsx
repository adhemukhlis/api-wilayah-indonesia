import React, {Component} from 'react';
import {Link} from "react-router-dom";
class PageHome extends Component {
    render() {
        return (
            <div
                style={{
                display: 'flex',
                minHeight: '100vh',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#111'
            }}>
                <div>
                    <h1 style={{
                        color: '#fff'
                    }}>API Wilayah Indonesia</h1>
                    <div
                        style={{
                        display: 'flex',
                        width: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>
                            <a
                                href="https://github.com/adhemukhlis/api-wilayah-indonesia/blob/master/README.md"
                                style={{
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                color: '#fff',
                                border: '1px solid',
                                padding: 'calc(.5vw + 1.2vh)',
                                borderRadius: 'calc(.5vw + 1.2vh)'
                            }}>Dokumentasi</a>
                        </span>
                        <span>
                            <Link
                                to="/wilayah"
                                style={{
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                color: '#fff',
                                border: '1px solid',
                                padding: 'calc(.5vw + 1.2vh)',
                                borderRadius: 'calc(.5vw + 1.2vh)'
                            }}>Data Wilayah</Link>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
export default PageHome;