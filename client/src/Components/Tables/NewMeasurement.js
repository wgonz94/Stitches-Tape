import React, { Component } from 'react';
import './Measure.css';

class NewMeasurement extends Component {
  // state = {

  // }

  // handleChange = e => {
  //   this.setState({
  //     [e.target.id]: e.target.type === 'checkbox' ? e.target.checked : e.target.value;
  //   })
  // }

  render() {
    return (
      <div className='container scroll'>
        <h3 className='center-align'>Client Info</h3>
        <div className='row'>
          <div className='input-field col s6'>
            <i className='material-icons prefix'>account_circle</i>
            <input type='text' placeholder='John Smith' id='client-name' />
            <label htmlFor='client-name' className='active'>
              Client Name (Required)
            </label>
          </div>
          <div className='input-field col s6'>
            <i className='material-icons prefix'>assignment</i>
            <input type='text' placeholder='Project Name' id='project-name' />
            <label htmlFor='project-name' className='active'>
              Project Name (Required)
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field col s6'>
            <i className='material-icons prefix'>email</i>
            <input
              id='email'
              type='email'
              placeholder='youremail@mail.com'
              className='validate'
            />
            <label htmlFor='email' className='active'>
              Email
            </label>
          </div>
          <div className='input-field col s6'>
            <i className='material-icons prefix'>phone</i>
            <input
              id='phone'
              placeholder='(555) 555-5555'
              type='tel'
              className='validate'
            />
            <label htmlFor='phone' className='active'>
              Telephone
            </label>
          </div>
        </div>
        <div id='geninfo'>
          <div className='modal-content'>
            <h3 className='center-align'>General Sizing Information</h3>
            <div className='row'>
              {/* Suit or Dress Size */}
              <div className='input-field col s4'>
                <i className='material-icons prefix'>wc</i>
                <input
                  type='text'
                  placeholder='Enter Size and select type below'
                  id='formal-sz'
                />
                <label htmlFor='formal-sz' className='active'>
                  Suit or Dress Size
                </label>
                {/* Select Suit or Dress */}
                <p>
                  <label>
                    <input name='group1' type='radio' />
                    <span>Suit</span>
                  </label>
                  <label>
                    <input name='group1' type='radio' />
                    <span>Dress</span>
                  </label>
                </p>
              </div>
              {/* Shirt Size */}
              <div className='input-field col s4'>
                <i className='material-icons prefix'>perm_identity</i>
                <input type='text' placeholder='Enter Size' id='shirt-sz' />
                <label htmlFor='shirt-sz' className='active'>
                  Shirt Size
                </label>
              </div>
              {/* Pant Waist */}
              <div className='input-field col s4'>
                <i className='material-icons prefix'>accessibility</i>
                <input type='text' placeholder='Enter Size' id='pant-waist' />
                <label htmlFor='pant-waist' className='active'>
                  Pant Waist
                </label>
              </div>
              {/* Pant Inseam */}
              <div className='input-field col s4'>
                <i className='material-icons prefix'>accessibility</i>
                <input type='text' placeholder='Enter Size' id='pant-inseam' />
                <label htmlFor='pant-inseam' className='active'>
                  Pant Inseam
                </label>
              </div>
              {/* Hat Size */}
              <div className='input-field col s4'>
                <i className='material-icons prefix'>insert_emoticon</i>
                <input type='text' placeholder='Enter Size' id='hat-sz' />
                <label htmlFor='hat-sz' className='active'>
                  Hat Size
                </label>
              </div>
              {/* Shoe Size */}
              <div className='input-field col s4'>
                <i className='material-icons prefix'>directions_walk</i>
                <input type='text' placeholder='Shoe Size' id='shoe-sz' />
                <label htmlFor='shoe-sz' className='active'>
                  Shoe Size
                </label>
              </div>
              {/* Height */}
              <div className='input-field col s4'>
                <i className='material-icons prefix'>nature_people</i>
                <input type='text' placeholder='Height in Inches' id='height' />
                <label htmlFor='height' className='active'>
                  Height
                </label>
              </div>
              {/* Weight */}
              <div className='input-field col s4'>
                <i className='material-icons prefix'>money</i>
                <input type='text' placeholder='Weight in lbs' id='weight' />
                <label htmlFor='weight' className='active'>
                  Weight
                </label>
              </div>
              {/* Hair Color */}
              <div className='input-field col s4'>
                <i className='material-icons prefix'>face</i>
                <input type='text' placeholder='Brunette' id='hair-color' />
                <label htmlFor='hair-color' className='active'>
                  Hair Color
                </label>
              </div>
              {/* Eye Color */}
              <div className='input-field col s4'>
                <i className='material-icons prefix'>visibility</i>
                <input type='text' placeholder='Hazel' id='eye-color' />
                <label htmlFor='eye-color' className='active'>
                  Eye Color
                </label>
              </div>
              {/* Handedness */}
              <p>
                <i className='material-icons prefix'>pan_tool</i> Handedness:
                <label>
                  <input name='handedness' type='radio' />
                  <span>Right-Handed</span>
                </label>
                <label>
                  <input name='handedness' type='radio' />
                  <span>Left-Handed</span>
                </label>
                <label>
                  <input name='handedness' type='radio' />
                  <span>Ambidextrous</span>
                </label>
              </p>
              <div className='row'>
                <form className='col s12'>
                  <div className='row'>
                    <div className='input-field col s12 center'>
                      <i className='material-icons prefix'>color_lens</i>
                      <textarea
                        name='color-pref'
                        className='materialize-textarea'
                        id='color-pref'
                        cols={30}
                        rows={10}
                        defaultValue={''}
                      />
                      <label htmlFor='color-pref'>Color Preferences</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div id='measurements'>
          <div className='modal-content'>
            <h3 className='center-align'>Standard Measurements</h3>
            <div className='row'>
              <div className='switch'>
                <label>
                  Inches
                  <input type='checkbox' />
                  <span className='lever' />
                  Centimeters
                </label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s3'>
                <input type='text' placeholder id='head-diam' />
                <label htmlFor='head-diam' className='active'>
                  Head Around
                </label>
              </div>
              <div className='input-field col s3'>
                <input type='text' placeholder id='head-over' />
                <label htmlFor='head-over' className='active'>
                  Head Over Top
                </label>
              </div>
              <div className='input-field col s3'>
                <input type='text' placeholder id='neck' />
                <label htmlFor='neck' className='active'>
                  Neck
                </label>
              </div>
              <div className='input-field col s3'>
                <input type='text' placeholder id='neck-fr' />
                <label htmlFor='neck-fr' className='active'>
                  Neck Height, Front
                </label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s3'>
                <input type='text' placeholder id='neck-bk' />
                <label htmlFor='neck-bk' className='active'>
                  Neck Height, Back
                </label>
              </div>
              <div className='input-field col s3'>
                <input type='text' placeholder id='bust' />
                <label htmlFor='bust' className='active'>
                  Bust
                </label>
              </div>
              <div className='input-field col s3'>
                <input type='text' placeholder id='chest' />
                <label htmlFor='chest' className='active'>
                  Chest
                </label>
              </div>
              <div className='input-field col s3'>
                <input type='text' placeholder id='bust-fr' />
                <label htmlFor='bust-fr' className='active'>
                  Bust, Front
                </label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s3'>
                <input type='text' placeholder id='bust-bk' />
                <label htmlFor='bust-bk' className='active'>
                  Bust, Back
                </label>
              </div>
              <div className='input-field col s3'>
                <input type='text' placeholder id='bust-ptp' />
                <label htmlFor='bust-ptp' className='active'>
                  Bust, Point-to-Point
                </label>
              </div>
              <div className='input-field col s3'>
                <input type='text' placeholder id='chest-fr' />
                <label htmlFor='chest-fr' className='active'>
                  Chest, Front
                </label>
              </div>
              <div className='input-field col s3'>
                <input type='text' placeholder id='shoulder-fr' />
                <label htmlFor='shoulder-fr' className='active'>
                  Shoulder, Front
                </label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s3'>
                <input type='text' placeholder id='shoulder-bk' />
                <label htmlFor='shoulder-bk' className='active'>
                  Shoulder, Back
                </label>
              </div>
              <div className='input-field col s3'>
                <input type='text' placeholder id='shoulder-sm' />
                <label htmlFor='shoulder-sm' className='active'>
                  Shoulder, Seam
                </label>
              </div>
              <div className='input-field col s3'>
                <input type='text' placeholder id='slope' />
                <label htmlFor='slope' className='active'>
                  Slope
                </label>
              </div>
              <div className='input-field col s3'>
                <input type='text' placeholder id='shoulder-ctr-fr' />
                <label htmlFor='shoulder-ctr-fr' className='active'>
                  Shoulder Tip to Center Waist, Front
                </label>
              </div>
            </div>
          </div>
        </div>
        <div id='measurements2'>
          <div className='modal-content'>
            <h3 className='center-align'>Standard Measurements Cont'd</h3>
            <div className='row'>
              <div className='input-field col s3'>
                <input type='text' placeholder id='shoulder-ctr-bk' />
                <label htmlFor='shoulder-ctr-bk' className='active'>
                  Shoulder Tip to Center Waist, Back
                </label>
              </div>
              <div className='input-field col s3'>
                <input type='text' placeholder id='armscye-fr' />
                <label htmlFor='armscye-fr' className='active'>
                  Armscye, Front
                </label>
              </div>
              <div className='input-field col s3'>
                <input type='text' placeholder id='armhole-snug' />
                <label htmlFor='armhole-snug' className='active'>
                  Armhole, Snug
                </label>
              </div>
              <div className='input-field col s3'>
                <input type='text' placeholder id='underarm-sm' />
                <label htmlFor='underarm-sm' className='active'>
                  Underarm Seam
                </label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s3'>
                <input type='text' placeholder id='waist' />
                <label htmlFor='waist' className='active'>
                  Waist
                </label>
              </div>
              <div className='input-field col s3'>
                <input type='text' placeholder id='neck-to-waist-fr' />
                <label htmlFor='neck-to-waist-fr' className='active'>
                  Neck to Waist, Front
                </label>
              </div>
              <div className='input-field col s3'>
                <input type='text' placeholder id='neck-to-waist-bk' />
                <label htmlFor='neck-to-waist-bk' className='active'>
                  Neck to Waist, Back
                </label>
              </div>
              <div className='input-field col s3'>
                <input type='text' placeholder id='hip-hipbone' />
                <label htmlFor='hip-hipbone' className='active'>
                  Hip at the Hipbones
                </label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s3'>
                <input type='text' placeholder id='hip-waist' />
                <label htmlFor='hip-waist' className='active'>
                  Hip to Waist
                </label>
              </div>
              <div className='input-field col s3'>
                <input type='text' placeholder id='lg-hip-across' />
                <label htmlFor='lg-hip-across' className='active'>
                  Large Hip, Across
                </label>
              </div>
              <div className='input-field col s3'>
                <input type='text' placeholder id='lg-hip-vert' />
                <label htmlFor='lg-hip-vert' className='active'>
                  Large Hip, Vertical
                </label>
              </div>
              <div className='input-field col s3'>
                <input type='text' placeholder id='neck-flr' />
                <label htmlFor='neck-flr' className='active'>
                  Neck to Floor
                </label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s3'>
                <input type='text' placeholder id='waist-flr' />
                <label htmlFor='waist-flr' className='active'>
                  Waist to Floor
                </label>
              </div>
              <div className='input-field col s3'>
                <input type='text' placeholder id='waist-to-below-knee' />
                <label htmlFor='waist-to-below-knee' className='active'>
                  Waist to Just Below Knee
                </label>
              </div>
              <div className='input-field col s3'>
                <input type='text' placeholder id='inseam' />
                <label htmlFor='inseam' className='active'>
                  Inseam
                </label>
              </div>
              <div className='input-field col s3'>
                <input type='text' placeholder id='knee-ankle' />
                <label htmlFor='knee-ankle' className='active'>
                  Knee to Ankle
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewMeasurement;
