import React from 'react';
import './style.css';
import { AiOutlineWhatsApp, AiFillFacebook } from 'react-icons/ai';
import instagram from './instagram.png'
import { BiPhone } from 'react-icons/bi';


function SideContact(props) {
    return (
        <div>
            <div className='row'>
                <div className='col-md-8 col-12'>
                </div>
                <div className='col-md-4 col-12'>
                    <div className="sideContact">
                        <hr className="horizontalLine" />
                        <p className="headding">Get Call From Our real Estate Expert</p>
                        <div className='inner-form-container'>
                            <form autoComplete='off'>
                                <div className='form-group'>
                                    <input type='text' placeholder='Name' name='name' id='name' className='form-control form-txt' />
                                </div>
                                <div className='form-group'>
                                    <input type='text' placeholder='Email' name='name' id='name' className='form-control form-txt' />
                                </div>
                                <div className='form-group'>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <select className="form-control form-txt countySelectionCode" id="FormControlSelect">
                                                <option className='countycode'>+ 91</option>
                                                <option className='countycode'>+ 61</option>
                                                <option className='countycode'>+ 11</option>
                                                <option className='countycode'>+ 12</option>
                                            </select>

                                        </div>
                                        <input type="text" class="form-control form-txt" aria-label="Text input with dropdown button" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <select class="form-control form-txt" id="FormControlSelect1" placeholder="Choose Your City">
                                        <option className='cityname'>Bangalore</option>
                                        <option className='cityname'>Pune</option>
                                        <option className='cityname'>Mumbai</option>
                                        <option className='cityname'>Delhi</option>
                                        <option className='cityname'>kolkata</option>
                                    </select>
                                </div>
                                <div className="form-group text-center">
                                    <input class="form-check-input" type="checkbox" value="" id="Check" />
                                    <label class="form-check-label">
                                        Enable Update Through  <a href='https://wa.me/+919513134810?text=I%20am%20intrested%20in%20GetRight%20Property.%20Please%20share%20more%20details!' className='anchertag-whatsapp'><AiOutlineWhatsApp style={{ color: 'green', paddingLeft: '2px', width: '16px', height: '16px' }} /> <span style={{ color: 'green' }}>Whats App</span></a>
                                    </label>
                                </div>
                                <div className='form-btn'>
                                    <button className='btn btn-call-back' type='submit'><BiPhone style={{ color: 'white', paddingRight: '2px', width: '20px', height: '20px' }} />Get A CallBack</button>
                                </div>
                                <div className="text-center mt-1 mb-1 social-media-title">Social links</div>
                                <div className='social-media-contact-form'>
                                    <div className="social-media-box">
                                        <a href=' https://www.facebook.com/pages/category/Advertising-Marketing/Get-Right-Property-111223380335151/ ' className='anchertag-facebook'>
                                            <AiFillFacebook style={{ color: '	#4267B2', paddingLeft: '2px', width: '16px', height: '16px' }} /></a>
                                        <a href=' https://www.instagram.com/concordeauriga6/ ' className='anchertag-instagram'>
                                            <img src={instagram} alt='instagram' width='12px' height='12px' title='instagram' />
                                        </a>
                                        <a href='https://wa.me/+919513134810?text=I%20am%20intrested%20in%20GetRight%20Property.%20Please%20share%20more%20details!' className='anchertag-whatsapp'>
                                            <AiOutlineWhatsApp style={{ color: 'green', paddingLeft: '2px', width: '16px', height: '16px' }} /></a>
                                        <a href='tel:+919513134810' className='anchertag-Call'>
                                            <BiPhone style={{ color: '#4169E1', paddingLeft: '2px', width: '16px', height: '16px' }} /></a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SideContact;



// import {spacing} from '@material-ui/system';
// import {makeStyles, createMuiTheme} from '@material-ui/core/styles';
// import {TextField, ThemeProvider} from '@material-ui/core';
// import {green} from '@material-ui/core/colors';

// TODO : here the Material UI CODE

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//         flexWrap: 'wrap',
//         primary: green,
//     },
//     margin: {
//         margin: theme.spacing(1),

//     },
//     auto: {
//         width: '100%',

//     }
// }));
// const classes = useStyles();
// const theme = {
//     spacing: [0, 2, 3, 5, 8],
//   }
{/* <TextField theam={theme}
className={classes.margin, classes.auto}
label="Name"
variant="outlined"
marginTop='2px'
/>
<TextField
className={classes.margin, classes.auto}
label="Email"
variant="outlined"
mt={2}
/>
<TextField
className={classes.margin, classes.auto}
label="Mobile"
variant="outlined"
/>
<TextField
className={classes.margin, classes.auto}
label="Message"
variant="outlined"
/> */}