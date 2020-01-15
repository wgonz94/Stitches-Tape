import React, { Component } from 'react';
import './Measure.css';

class NewMeasurement extends Component {
  state = {};

  handleChange = e => {
    this.setState({
      [e.target.id]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className='scroll'>
        <h3 className='center-align'>Client Info</h3>
        <div className='row'>
          <div className='input-field col s6'>
            <i className='material-icons prefix'>account_circle</i>
            <input
              type='text'
              placeholder='John Smith'
              id='client-name'
              onChange={this.handleChange}
            />
            <label htmlFor='client-name' className='active'>
              Client Name (Required)
            </label>
          </div>
          <div className='input-field col s6'>
            <i className='material-icons prefix'>assignment</i>
            <input
              type='text'
              placeholder='Project Name'
              id='project-name'
              onChange={this.handleChange}
            />
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
                <input type='text' placeholder='Enter Size' id='suit-sz' />
                <label htmlFor='suit-sz' className='active'>
                  Suit Size
                </label>
                {/* Select Suit or Dress */}
                {/* <p>
                  <label>
                    <input name='group1' type='radio' />
                    <span>Suit</span>
                  </label>
                  <label>
                    <input name='group1' type='radio' />
                    <span>Dress</span>
                  </label>
                </p> */}
              </div>
              {/* Dress Size */}
              <div className='input-field col s4'>
                <i className='material-icons prefix'>wc</i>
                <input type='text' placeholder='Enter Size' id='dress-sz' />
                <label htmlFor='dress-sz' className='active'>
                  Dress Size
                </label>
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
                <input
                  type='text'
                  placeholder='1'
                  id='head-diam'
                  className='center'
                />
                <label htmlFor='head-diam' className='active'>
                  Head Around
                </label>
              </div>
              <div className='input-field col s3'>
                <input
                  type='text'
                  placeholder='2'
                  id='head-over'
                  className='center'
                />
                <label htmlFor='head-over' className='active'>
                  Head Over Top
                </label>
              </div>
              <div className='input-field col s3'>
                <input
                  type='text'
                  placeholder='3'
                  id='neck'
                  className='center'
                />
                <label htmlFor='neck' className='active'>
                  Neck
                </label>
              </div>
              <div className='input-field col s3'>
                <input
                  type='text'
                  placeholder='4'
                  id='neck-fr'
                  className='center'
                />
                <label htmlFor='neck-fr' className='active center'>
                  Neck Height, Front
                </label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s3'>
                <input
                  type='text'
                  placeholder='5'
                  className='center'
                  id='neck-bk'
                />
                <label htmlFor='neck-bk' className='active'>
                  Neck Height, Back
                </label>
              </div>
              <div className='input-field col s3'>
                <input
                  type='text'
                  placeholder='6'
                  id='bust'
                  className='center'
                />
                <label htmlFor='bust' className='active'>
                  Bust
                </label>
              </div>
              <div className='input-field col s3'>
                <input
                  type='text'
                  placeholder='7'
                  id='chest'
                  className='center'
                />
                <label htmlFor='chest' className='active'>
                  Chest
                </label>
              </div>
              <div className='input-field col s3'>
                <input
                  type='text'
                  placeholder='8'
                  id='bust-fr'
                  className='center'
                />
                <label htmlFor='bust-fr' className='active'>
                  Bust, Front
                </label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s3'>
                <input
                  type='text'
                  placeholder='9'
                  id='bust-bk'
                  className='center'
                />
                <label htmlFor='bust-bk' className='active'>
                  Bust, Back
                </label>
              </div>
              <div className='input-field col s3'>
                <input
                  type='text'
                  placeholder='10'
                  id='bust-ptp'
                  className='center'
                />
                <label htmlFor='bust-ptp' className='active'>
                  Bust, Point-to-Point
                </label>
              </div>
              <div className='input-field col s3'>
                <input
                  type='text'
                  placeholder='11'
                  id='chest-fr'
                  className='center'
                />
                <label htmlFor='chest-fr' className='active'>
                  Chest, Front
                </label>
              </div>
              <div className='input-field col s3'>
                <input
                  type='text'
                  placeholder='12'
                  id='shoulder-fr'
                  className='center'
                />
                <label htmlFor='shoulder-fr' className='active'>
                  Shoulder, Front
                </label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s3'>
                <input
                  type='text'
                  placeholder='13'
                  id='shoulder-bk'
                  className='center'
                />
                <label htmlFor='shoulder-bk' className='active'>
                  Shoulder, Back
                </label>
              </div>
              <div className='input-field col s3'>
                <input
                  type='text'
                  placeholder='14'
                  id='shoulder-sm'
                  className='center'
                />
                <label htmlFor='shoulder-sm' className='active'>
                  Shoulder, Seam
                </label>
              </div>
              <div className='input-field col s3'>
                <input
                  type='text'
                  placeholder='15'
                  id='slope'
                  className='center'
                />
                <label htmlFor='slope' className='active'>
                  Slope
                </label>
              </div>
              <div className='input-field col s3'>
                <input
                  type='text'
                  placeholder='16'
                  id='shoulder-ctr-fr'
                  className='center'
                />
                <label htmlFor='shoulder-ctr-fr' className='active'>
                  Shoulder Tip to Center Waist, Front
                </label>
              </div>
            </div>
          </div>
        </div>
        <div id='measurements2'>
          <div className='row'>
            <div className='input-field col s3'>
              <input
                type='text'
                placeholder='17'
                id='shoulder-ctr-bk'
                className='center'
              />
              <label htmlFor='shoulder-ctr-bk' className='active'>
                Shoulder Tip to Center Waist, Back
              </label>
            </div>
            <div className='input-field col s3'>
              <input
                type='text'
                placeholder='18'
                id='armscye-fr'
                className='center'
              />
              <label htmlFor='armscye-fr' className='active'>
                Armscye, Front
              </label>
            </div>
            <div className='input-field col s3'>
              <input
                type='text'
                placeholder='19'
                id='armhole-snug'
                className='center'
              />
              <label htmlFor='armhole-snug' className='active'>
                Armhole, Snug
              </label>
            </div>
            <div className='input-field col s3'>
              <input
                type='text'
                placeholder='20'
                id='underarm-sm'
                className='center'
              />
              <label htmlFor='underarm-sm' className='active'>
                Underarm Seam
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s3'>
              <input
                type='text'
                placeholder='21'
                id='waist'
                className='center'
              />
              <label htmlFor='waist' className='active'>
                Waist
              </label>
            </div>
            <div className='input-field col s3'>
              <input
                type='text'
                placeholder='22'
                id='neck-to-waist-fr'
                className='center'
              />
              <label htmlFor='neck-to-waist-fr' className='active'>
                Neck to Waist, Front
              </label>
            </div>
            <div className='input-field col s3'>
              <input
                type='text'
                placeholder='23'
                id='neck-to-waist-bk'
                className='center'
              />
              <label htmlFor='neck-to-waist-bk' className='active'>
                Neck to Waist, Back
              </label>
            </div>
            <div className='input-field col s3'>
              <input
                type='text'
                placeholder='24'
                id='hip-hipbone'
                className='center'
              />
              <label htmlFor='hip-hipbone' className='active'>
                Hip at the Hipbones
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s3'>
              <input
                type='text'
                placeholder='25'
                id='hip-waist'
                className='center'
              />
              <label htmlFor='hip-waist' className='active'>
                Hip to Waist
              </label>
            </div>
            <div className='input-field col s3'>
              <input
                type='text'
                placeholder='26'
                id='lg-hip-across'
                className='center'
              />
              <label htmlFor='lg-hip-across' className='active'>
                Large Hip, Across
              </label>
            </div>
            <div className='input-field col s3'>
              <input
                type='text'
                placeholder='27'
                id='lg-hip-vert'
                className='center'
              />
              <label htmlFor='lg-hip-vert' className='active'>
                Large Hip, Vertical
              </label>
            </div>
            <div className='input-field col s3'>
              <input
                type='text'
                placeholder='28'
                id='neck-flr'
                className='center'
              />
              <label htmlFor='neck-flr' className='active'>
                Neck to Floor
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s3'>
              <input
                type='text'
                placeholder='29'
                id='waist-flr'
                className='center'
              />
              <label htmlFor='waist-flr' className='active'>
                Waist to Floor
              </label>
            </div>
            <div className='input-field col s3'>
              <input
                type='text'
                placeholder='30'
                id='waist-to-below-knee'
                className='center'
              />
              <label htmlFor='waist-to-below-knee' className='active'>
                Waist to Just Below Knee
              </label>
            </div>
            <div className='input-field col s3'>
              <input
                type='text'
                placeholder='31'
                id='inseam'
                className='center'
              />
              <label htmlFor='inseam' className='active'>
                Inseam
              </label>
            </div>
            <div className='input-field col s3'>
              <input
                type='text'
                placeholder='32'
                id='knee-ankle'
                className='center'
              />
              <label htmlFor='knee-ankle' className='active'>
                Knee to Ankle
              </label>
            </div>
          </div>
        </div>

        <div id='measurements3'>
          <div className='row'>
            <div className='input-field col s3'>
              <input
                type='text'
                placeholder='33'
                id='upper-th'
                className='center'
              />
              <label htmlFor='upper-th' className='active'>
                Upper Thigh
              </label>
            </div>
            <div className='input-field col s3'>
              <input
                type='text'
                placeholder='34'
                id='upper-th-flx'
                className='center'
              />
              <label htmlFor='upper-th-flx' className='active'>
                Upper Thigh, Flexed
              </label>
            </div>
            <div className='input-field col s3'>
              <input
                type='text'
                placeholder='35'
                id='calf'
                className='center'
              />
              <label htmlFor='calf' className='active'>
                Calf
              </label>
            </div>
            <div className='input-field col s3'>
              <input
                type='text'
                placeholder='36'
                id='ankle'
                className='center'
              />
              <label htmlFor='ankle' className='active'>
                Ankle
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s3'>
              <input
                type='text'
                placeholder='37'
                id='overall-rise'
                className='center'
              />
              <label htmlFor='overall-rise' className='active'>
                Overall Rise
              </label>
            </div>
            <div className='input-field col s3'>
              <input
                type='text'
                placeholder='38'
                id='rise-fr'
                className='center'
              />
              <label htmlFor='rise-fr' className='active'>
                Rise, Front
              </label>
            </div>
            <div className='input-field col s3'>
              <input
                type='text'
                placeholder='39'
                id='rise-bk'
                className='center'
              />
              <label htmlFor='rise-bk' className='active'>
                Rise, Back
              </label>
            </div>
            <div className='input-field col s3'>
              <input
                type='text'
                placeholder='40'
                id='arm-length'
                className='center'
              />
              <label htmlFor='arm-length' className='active'>
                Arm Length
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s3'>
              <input
                type='text'
                placeholder='41'
                id='overarm'
                className='center'
              />
              <label htmlFor='overarm' className='active'>
                Overarm
              </label>
            </div>
            <div className='input-field col s3'>
              <input
                type='text'
                placeholder='42'
                id='arm-to-elbow'
                className='center'
              />
              <label htmlFor='arm-to-elbow' className='active'>
                Arm to Elbow
              </label>
            </div>
            <div className='input-field col s3'>
              <input
                type='text'
                placeholder='43'
                id='elbow-to-wrist'
                className='center'
              />
              <label htmlFor='elbow-to-wrist' className='active'>
                Elbow to Wrist
              </label>
            </div>
            <div className='input-field col s3'>
              <input
                type='text'
                placeholder='44'
                id='bicep'
                className='center'
              />
              <label htmlFor='bicep' className='active'>
                Bicep
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s3'>
              <input
                type='text'
                placeholder='45'
                id='bicep-flx'
                className='center'
              />
              <label htmlFor='bicep-flx' className='active'>
                Bicep, Flexed
              </label>
            </div>
            <div className='input-field col s3'>
              <input
                type='text'
                placeholder='46'
                id='elbow'
                className='center'
              />
              <label htmlFor='elbow' className='active'>
                Elbow
              </label>
            </div>
            <div className='input-field col s3'>
              <input
                type='text'
                placeholder='47'
                id='wrist'
                className='center'
              />
              <label htmlFor='wrist' className='active'>
                Wrist
              </label>
            </div>
            <div className='input-field col s3'>
              <input
                type='text'
                placeholder='48'
                id='hand'
                className='center'
              />
              <label htmlFor='hand' className='active'>
                Hand (Balled into a Fist)
              </label>
            </div>
          </div>
        </div>
        <div>
          <h3 className='center-align'>Custom Measurements</h3>
          <h5 className='center-align'>
            Please Enter Name of Measurement and Value
          </h5>
          <div className='row'>
            <div className='input-field col s4'>
              <input
                type='text'
                placeholder='Custom Measurement'
                id='custom1'
              />
              <label htmlFor='custom1' className='active'>
                Custom Measurement #1
              </label>
            </div>
            <div className='input-field col s4'>
              <input
                type='text'
                placeholder='Custom Measurement'
                id='custom2'
              />
              <label htmlFor='custom2' className='active'>
                Custom Measurement #2
              </label>
            </div>
            <div className='input-field col s4'>
              <input
                type='text'
                placeholder='Custom Measurement'
                id='custom3'
              />
              <label htmlFor='custom3' className='active'>
                Custom Measurement #3
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s5'>
              <input
                type='text'
                placeholder='Custom Measurement'
                id='custom4'
              />
              <label htmlFor='custom4' className='active'>
                Custom Measurement #4
              </label>
            </div>
            <div className='input-field col s5'>
              <input
                type='text'
                placeholder='Custom Measurement'
                id='custom5'
              />
              <label htmlFor='custom5' className='active'>
                Custom Measurement #5
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewMeasurement;
