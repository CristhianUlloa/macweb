import React, { Component, PropTypes } from 'react';
import Navbar from './Navbar.js';
import Lightbox from 'react-images';

const theme = {
	// container
	container: { background: 'rgba(255, 255, 255, 0.9)' },

	// arrows
	arrow: {
		backgroundColor: 'rgba(255, 255, 255, 0.8)',
		fill: '#222',
		opacity: 0.6,
		transition: 'opacity 200ms',

		':hover': {
			opacity: 1,
		},
	},
	arrow__size__medium: {
		borderRadius: 40,
		height: 40,
		marginTop: -20,

		'@media (min-width: 768px)': {
			height: 70,
			padding: 15,
		},
	},
	arrow__direction__left: { marginLeft: 10 },
	arrow__direction__right: { marginRight: 10 },

	// header
	close: {
		fill: '#D40000',
		opacity: 0.6,
		transition: 'all 200ms',

		':hover': {
			opacity: 1,
		},
	},

	// footer
	footer: {
		color: 'black',
	},
	footerCount: {
		color: 'rgba(0, 0, 0, 0.6)',
	},

	// thumbnails
	thumbnail: {
	},
	thumbnail__active: {
		boxShadow: '0 0 0 2px #00D8FF',
	},
};

class Photos extends Component {
  //hacking old jquery photo gallery into component
  //  componentDidMount() {
  //    var embedCode = '<script src="//blueimp.github.io/Gallery/js/jquery.blueimp-gallery.min.js"></script>';
  //
  //    $('#photo-page').append(embedCode);
  //  }
  
  constructor () {
      super();

      this.state = {
          lightboxIsOpen: false,
          currentImage: 0,
      };

      this.closeLightbox = this.closeLightbox.bind(this);
      this.gotoNext = this.gotoNext.bind(this);
      this.gotoPrevious = this.gotoPrevious.bind(this);
      this.gotoImage = this.gotoImage.bind(this);
      this.handleClickImage = this.handleClickImage.bind(this);
      this.openLightbox = this.openLightbox.bind(this);
  }
  openLightbox (index, event) {
      event.preventDefault();
      this.setState({
          currentImage: index,
          lightboxIsOpen: true,
      });
  }
  closeLightbox () {
      this.setState({
          currentImage: 0,
          lightboxIsOpen: false,
      });
  }
  gotoPrevious () {
      this.setState({
          currentImage: this.state.currentImage - 1,
      });
  }
  gotoNext () {
      this.setState({
          currentImage: this.state.currentImage + 1,
      });
  }
  gotoImage (index) {
      this.setState({
          currentImage: index,
      });
  }
  handleClickImage () {
      if (this.state.currentImage === this.props.images.length - 1) return;

      this.gotoNext();
  }
  
  render() {
    return (
      /* I AM SORRY FOR WHAT NEEDED TO BE DONE */
      /* Turns out there's not a nice way I could find to pull in the contents of the directory and populate a template.
      So, there's a python script at the top level (photoGalleryFilenameGen.py) that generates this HTML.
      YOU MUST RUN THE SCRIPT AND REPLACE THIS SECTION WITH THE PRINTOUT IF YOU CHANGE THE CONTENTS OF GALLERY_PHOTOS. */

      /*LOL @CristhianUlloa
      I haven't seen that script, you'll need to add '/' to close all the image tags in there, or use find/replace to add it afterwards
      Even better, talk to me about generating this the react way --@Firescar96*/

      //TODO I had to remove the photo gallery display code because it couldn't get it working after the port from Blaze to Reat --@Firescar96

      //This page created with much help from http://michaelsoriano.com/create-a-responsive-photo-gallery-with-bootstrap-framework/
      <div className="entryj">
        <Navbar />
        <div className="title-div">
          <h1>J Entry Photo Gallery</h1>
        </div>
        <div id="photo-page" className="container">
          <ul className="row gallery-list" id="main-gallery">
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4084.JPG" onClick={(e) => this.openLightbox(0, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1291.jpg" onClick={(e) => this.openLightbox(1, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4210.JPG" onClick={(e) => this.openLightbox(2, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_5281.JPG" onClick={(e) => this.openLightbox(3, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_8006.JPG" onClick={(e) => this.openLightbox(4, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_2259.jpg" onClick={(e) => this.openLightbox(5, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_8127.JPG" onClick={(e) => this.openLightbox(6, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1725.jpg" onClick={(e) => this.openLightbox(7, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_7973.JPG" onClick={(e) => this.openLightbox(8, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1757.jpg" onClick={(e) => this.openLightbox(9, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4348.JPG" onClick={(e) => this.openLightbox(10, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_2255.jpg" onClick={(e) => this.openLightbox(11, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4123.JPG" onClick={(e) => this.openLightbox(12, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_2281.jpg" onClick={(e) => this.openLightbox(13, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3816.jpg" onClick={(e) => this.openLightbox(14, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4568.JPG" onClick={(e) => this.openLightbox(15, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-102_rainforest_cafe_group.jpg" onClick={(e) => this.openLightbox(16, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4713.jpg" onClick={(e) => this.openLightbox(17, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_1341.jpg" onClick={(e) => this.openLightbox(18, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4170.JPG" onClick={(e) => this.openLightbox(19, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-047_IMG_7611.JPG" onClick={(e) => this.openLightbox(20, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3952.JPG" onClick={(e) => this.openLightbox(21, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1644.jpg" onClick={(e) => this.openLightbox(22, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_2781.JPG" onClick={(e) => this.openLightbox(23, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1619.jpg" onClick={(e) => this.openLightbox(24, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1708.jpg" onClick={(e) => this.openLightbox(25, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1775.jpg" onClick={(e) => this.openLightbox(26, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1709.jpg" onClick={(e) => this.openLightbox(27, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1627.jpg" onClick={(e) => this.openLightbox(28, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3851.JPG" onClick={(e) => this.openLightbox(29, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1759.jpg" onClick={(e) => this.openLightbox(30, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3927.jpg" onClick={(e) => this.openLightbox(31, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3166.JPG" onClick={(e) => this.openLightbox(32, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_2896.JPG" onClick={(e) => this.openLightbox(33, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3811.jpg" onClick={(e) => this.openLightbox(34, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_5252.JPG" onClick={(e) => this.openLightbox(35, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-038_IMG_3791.JPG" onClick={(e) => this.openLightbox(36, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_2773.JPG" onClick={(e) => this.openLightbox(37, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3982.JPG" onClick={(e) => this.openLightbox(38, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_2267.jpg" onClick={(e) => this.openLightbox(39, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1025.jpg" onClick={(e) => this.openLightbox(40, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4254-2.jpg" onClick={(e) => this.openLightbox(41, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4755.JPG" onClick={(e) => this.openLightbox(42, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4806.JPG" onClick={(e) => this.openLightbox(43, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1774.jpg" onClick={(e) => this.openLightbox(44, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4192.JPG" onClick={(e) => this.openLightbox(45, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1765.jpg" onClick={(e) => this.openLightbox(46, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-026_IMG_7581.JPG" onClick={(e) => this.openLightbox(47, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4449.JPG" onClick={(e) => this.openLightbox(48, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3672.JPG" onClick={(e) => this.openLightbox(49, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1705.jpg" onClick={(e) => this.openLightbox(50, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4750.JPG" onClick={(e) => this.openLightbox(51, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1307.jpg" onClick={(e) => this.openLightbox(52, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-094_IMG_7684.JPG" onClick={(e) => this.openLightbox(53, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_2820.JPG" onClick={(e) => this.openLightbox(54, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4549.JPG" onClick={(e) => this.openLightbox(55, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4309.JPG" onClick={(e) => this.openLightbox(56, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1717.jpg" onClick={(e) => this.openLightbox(57, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_8136.JPG" onClick={(e) => this.openLightbox(58, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_1327.jpg" onClick={(e) => this.openLightbox(59, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4086.JPG" onClick={(e) => this.openLightbox(60, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4193.JPG" onClick={(e) => this.openLightbox(61, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1623.jpg" onClick={(e) => this.openLightbox(62, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4491.JPG" onClick={(e) => this.openLightbox(63, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-008_IMG_3775.JPG" onClick={(e) => this.openLightbox(64, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4178.jpg" onClick={(e) => this.openLightbox(65, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3169.JPG" onClick={(e) => this.openLightbox(66, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4226.jpg" onClick={(e) => this.openLightbox(67, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1631.jpg" onClick={(e) => this.openLightbox(68, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4288 2-2.jpg" onClick={(e) => this.openLightbox(69, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_2272.jpg" onClick={(e) => this.openLightbox(70, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1746.jpg" onClick={(e) => this.openLightbox(71, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-028_IMG_7584.JPG" onClick={(e) => this.openLightbox(72, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4513.JPG" onClick={(e) => this.openLightbox(73, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1706.jpg" onClick={(e) => this.openLightbox(74, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4223.JPG" onClick={(e) => this.openLightbox(75, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4734.JPG" onClick={(e) => this.openLightbox(76, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3808.jpg" onClick={(e) => this.openLightbox(77, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_2273.jpg" onClick={(e) => this.openLightbox(78, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1748.jpg" onClick={(e) => this.openLightbox(79, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_5267.JPG" onClick={(e) => this.openLightbox(80, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-032_IMG_7589.JPG" onClick={(e) => this.openLightbox(81, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1713.jpg" onClick={(e) => this.openLightbox(82, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1752.jpg" onClick={(e) => this.openLightbox(83, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1734.jpg" onClick={(e) => this.openLightbox(84, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3693.JPG" onClick={(e) => this.openLightbox(85, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3007.JPG" onClick={(e) => this.openLightbox(86, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4175.jpg" onClick={(e) => this.openLightbox(87, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4637.JPG" onClick={(e) => this.openLightbox(88, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-063.JPG" onClick={(e) => this.openLightbox(89, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_2279.jpg" onClick={(e) => this.openLightbox(90, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_2759.JPG" onClick={(e) => this.openLightbox(91, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4550.JPG" onClick={(e) => this.openLightbox(92, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4108.JPG" onClick={(e) => this.openLightbox(93, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_2857.JPG" onClick={(e) => this.openLightbox(94, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1451.jpg" onClick={(e) => this.openLightbox(95, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3140.JPG" onClick={(e) => this.openLightbox(96, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_5258.JPG" onClick={(e) => this.openLightbox(97, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1777.jpg" onClick={(e) => this.openLightbox(98, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4412.JPG" onClick={(e) => this.openLightbox(99, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_7965.JPG" onClick={(e) => this.openLightbox(100, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_8042.JPG" onClick={(e) => this.openLightbox(101, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4256.jpg" onClick={(e) => this.openLightbox(102, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-042_IMG_7604.JPG" onClick={(e) => this.openLightbox(103, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_7984.JPG" onClick={(e) => this.openLightbox(104, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3129.JPG" onClick={(e) => this.openLightbox(105, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-080_IMG_7662.JPG" onClick={(e) => this.openLightbox(106, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4711.jpg" onClick={(e) => this.openLightbox(107, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_7901.JPG" onClick={(e) => this.openLightbox(108, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_8057.JPG" onClick={(e) => this.openLightbox(109, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_2996.JPG" onClick={(e) => this.openLightbox(110, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-195.JPG" onClick={(e) => this.openLightbox(111, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_2926.JPG" onClick={(e) => this.openLightbox(112, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-039_IMG_3794.JPG" onClick={(e) => this.openLightbox(113, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_1338.jpg" onClick={(e) => this.openLightbox(114, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_2259pepe.jpg" onClick={(e) => this.openLightbox(115, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-_MG_3997-2.jpg" onClick={(e) => this.openLightbox(116, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3214.JPG" onClick={(e) => this.openLightbox(117, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1736.jpg" onClick={(e) => this.openLightbox(118, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1449.jpg" onClick={(e) => this.openLightbox(119, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_8027.JPG" onClick={(e) => this.openLightbox(120, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4651.JPG" onClick={(e) => this.openLightbox(121, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3831.jpg" onClick={(e) => this.openLightbox(122, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-001_IMG_3759.JPG" onClick={(e) => this.openLightbox(123, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4098.JPG" onClick={(e) => this.openLightbox(124, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_8049.JPG" onClick={(e) => this.openLightbox(125, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3057.JPG" onClick={(e) => this.openLightbox(126, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4170(Madelyn).JPG" onClick={(e) => this.openLightbox(127, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1756.jpg" onClick={(e) => this.openLightbox(128, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_5256.JPG" onClick={(e) => this.openLightbox(129, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_5249.JPG" onClick={(e) => this.openLightbox(130, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4547.JPG" onClick={(e) => this.openLightbox(131, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1730.jpg" onClick={(e) => this.openLightbox(132, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_7930.JPG" onClick={(e) => this.openLightbox(133, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4404.JPG" onClick={(e) => this.openLightbox(134, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-_MG_3980-2.jpg" onClick={(e) => this.openLightbox(135, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_5278.JPG" onClick={(e) => this.openLightbox(136, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1027.jpg" onClick={(e) => this.openLightbox(137, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_2814.JPG" onClick={(e) => this.openLightbox(138, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-057_IMG_7639.JPG" onClick={(e) => this.openLightbox(139, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4418.JPG" onClick={(e) => this.openLightbox(140, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3069.JPG" onClick={(e) => this.openLightbox(141, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1618.jpg" onClick={(e) => this.openLightbox(142, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4654.JPG" onClick={(e) => this.openLightbox(143, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_2258.jpg" onClick={(e) => this.openLightbox(144, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3815-2.jpg" onClick={(e) => this.openLightbox(145, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1704.jpg" onClick={(e) => this.openLightbox(146, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3662.JPG" onClick={(e) => this.openLightbox(147, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1702.jpg" onClick={(e) => this.openLightbox(148, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4247.JPG" onClick={(e) => this.openLightbox(149, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1776.jpg" onClick={(e) => this.openLightbox(150, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1648.jpg" onClick={(e) => this.openLightbox(151, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_5269.JPG" onClick={(e) => this.openLightbox(152, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_2287.jpg" onClick={(e) => this.openLightbox(153, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1703.jpg" onClick={(e) => this.openLightbox(154, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4154.JPG" onClick={(e) => this.openLightbox(155, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-193.JPG" onClick={(e) => this.openLightbox(156, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3823.jpg" onClick={(e) => this.openLightbox(157, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_1448.jpg" onClick={(e) => this.openLightbox(158, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3819.jpg" onClick={(e) => this.openLightbox(159, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4222.jpg" onClick={(e) => this.openLightbox(160, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1647.jpg" onClick={(e) => this.openLightbox(161, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4173.JPG" onClick={(e) => this.openLightbox(162, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4240.JPG" onClick={(e) => this.openLightbox(163, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1628.jpg" onClick={(e) => this.openLightbox(164, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_2289.jpg" onClick={(e) => this.openLightbox(165, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-103_IMG_7701.JPG" onClick={(e) => this.openLightbox(166, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_4081.JPG" onClick={(e) => this.openLightbox(167, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-E08_1715.jpg" onClick={(e) => this.openLightbox(168, e)}/></a></li>
            <li className="col-lg-4 col-md-2 col-sm-12 col-xs-12"><a data-gallery> <img className="img-responsive" src="/entry/j/gallery_photos/compressed/opt-IMG_3646.JPG" onClick={(e) => this.openLightbox(169, e)}/></a></li>



          </ul>
        </div>
      
        <Lightbox
          currentImage={this.state.currentImage}
          images={[
            { src: "/entry/j/gallery_photos/IMG_4084.JPG"},
            { src: "/entry/j/gallery_photos/E08_1291.jpg"},
            { src: "/entry/j/gallery_photos/IMG_4210.JPG"},
            { src: "/entry/j/gallery_photos/IMG_5281.JPG"},
            { src: "/entry/j/gallery_photos/IMG_8006.JPG"},
            { src: "/entry/j/gallery_photos/E08_2259.jpg"},
            { src: "/entry/j/gallery_photos/IMG_8127.JPG"},
            { src: "/entry/j/gallery_photos/E08_1725.jpg"},
            { src: "/entry/j/gallery_photos/IMG_7973.JPG"},
            { src: "/entry/j/gallery_photos/E08_1757.jpg"},
            { src: "/entry/j/gallery_photos/IMG_4348.JPG"},
            { src: "/entry/j/gallery_photos/E08_2255.jpg"},
            { src: "/entry/j/gallery_photos/IMG_4123.JPG"},
            { src: "/entry/j/gallery_photos/E08_2281.jpg"},
            { src: "/entry/j/gallery_photos/IMG_3816.jpg"},
            { src: "/entry/j/gallery_photos/IMG_4568.JPG"},
            { src: "/entry/j/gallery_photos/102_rainforest_cafe_group.jpg"},
            { src: "/entry/j/gallery_photos/IMG_4713.jpg"},
            { src: "/entry/j/gallery_photos/IMG_1341.jpg"},
            { src: "/entry/j/gallery_photos/IMG_4170.JPG"},
            { src: "/entry/j/gallery_photos/047_IMG_7611.JPG"},
            { src: "/entry/j/gallery_photos/IMG_3952.JPG"},
            { src: "/entry/j/gallery_photos/E08_1644.jpg"},
            { src: "/entry/j/gallery_photos/IMG_2781.JPG"},
            { src: "/entry/j/gallery_photos/E08_1619.jpg"},
            { src: "/entry/j/gallery_photos/E08_1708.jpg"},
            { src: "/entry/j/gallery_photos/E08_1775.jpg"},
            { src: "/entry/j/gallery_photos/E08_1709.jpg"},
            { src: "/entry/j/gallery_photos/E08_1627.jpg"},
            { src: "/entry/j/gallery_photos/IMG_3851.JPG"},
            { src: "/entry/j/gallery_photos/E08_1759.jpg"},
            { src: "/entry/j/gallery_photos/IMG_3927.jpg"},
            { src: "/entry/j/gallery_photos/IMG_3166.JPG"},
            { src: "/entry/j/gallery_photos/IMG_2896.JPG"},
            { src: "/entry/j/gallery_photos/IMG_3811.jpg"},
            { src: "/entry/j/gallery_photos/IMG_5252.JPG"},
            { src: "/entry/j/gallery_photos/038_IMG_3791.JPG"},
            { src: "/entry/j/gallery_photos/IMG_2773.JPG"},
            { src: "/entry/j/gallery_photos/IMG_3982.JPG"},
            { src: "/entry/j/gallery_photos/E08_2267.jpg"},
            { src: "/entry/j/gallery_photos/E08_1025.jpg"},
            { src: "/entry/j/gallery_photos/IMG_4254-2.jpg"},
            { src: "/entry/j/gallery_photos/IMG_4755.JPG"},
            { src: "/entry/j/gallery_photos/IMG_4806.JPG"},
            { src: "/entry/j/gallery_photos/E08_1774.jpg"},
            { src: "/entry/j/gallery_photos/IMG_4192.JPG"},
            { src: "/entry/j/gallery_photos/E08_1765.jpg"},
            { src: "/entry/j/gallery_photos/026_IMG_7581.JPG"},
            { src: "/entry/j/gallery_photos/IMG_4449.JPG"},
            { src: "/entry/j/gallery_photos/IMG_3672.JPG"},
            { src: "/entry/j/gallery_photos/E08_1705.jpg"},
            { src: "/entry/j/gallery_photos/IMG_4750.JPG"},
            { src: "/entry/j/gallery_photos/E08_1307.jpg"},
            { src: "/entry/j/gallery_photos/094_IMG_7684.JPG"},
            { src: "/entry/j/gallery_photos/IMG_2820.JPG"},
            { src: "/entry/j/gallery_photos/IMG_4549.JPG"},
            { src: "/entry/j/gallery_photos/IMG_4309.JPG"},
            { src: "/entry/j/gallery_photos/E08_1717.jpg"},
            { src: "/entry/j/gallery_photos/IMG_8136.JPG"},
            { src: "/entry/j/gallery_photos/IMG_1327.jpg"},
            { src: "/entry/j/gallery_photos/IMG_4086.JPG"},
            { src: "/entry/j/gallery_photos/IMG_4193.JPG"},
            { src: "/entry/j/gallery_photos/E08_1623.jpg"},
            { src: "/entry/j/gallery_photos/IMG_4491.JPG"},
            { src: "/entry/j/gallery_photos/008_IMG_3775.JPG"},
            { src: "/entry/j/gallery_photos/IMG_4178.jpg"},
            { src: "/entry/j/gallery_photos/IMG_3169.JPG"},
            { src: "/entry/j/gallery_photos/IMG_4226.jpg"},
            { src: "/entry/j/gallery_photos/E08_1631.jpg"},
            { src: "/entry/j/gallery_photos/IMG_4288 2-2.jpg"},
            { src: "/entry/j/gallery_photos/E08_2272.jpg"},
            { src: "/entry/j/gallery_photos/E08_1746.jpg"},
            { src: "/entry/j/gallery_photos/028_IMG_7584.JPG"},
            { src: "/entry/j/gallery_photos/IMG_4513.JPG"},
            { src: "/entry/j/gallery_photos/E08_1706.jpg"},
            { src: "/entry/j/gallery_photos/IMG_4223.JPG"},
            { src: "/entry/j/gallery_photos/IMG_4734.JPG"},
            { src: "/entry/j/gallery_photos/IMG_3808.jpg"},
            { src: "/entry/j/gallery_photos/E08_2273.jpg"},
            { src: "/entry/j/gallery_photos/E08_1748.jpg"},
            { src: "/entry/j/gallery_photos/IMG_5267.JPG"},
            { src: "/entry/j/gallery_photos/032_IMG_7589.JPG"},
            { src: "/entry/j/gallery_photos/E08_1713.jpg"},
            { src: "/entry/j/gallery_photos/E08_1752.jpg"},
            { src: "/entry/j/gallery_photos/E08_1734.jpg"},
            { src: "/entry/j/gallery_photos/IMG_3693.JPG"},
            { src: "/entry/j/gallery_photos/IMG_3007.JPG"},
            { src: "/entry/j/gallery_photos/IMG_4175.jpg"},
            { src: "/entry/j/gallery_photos/IMG_4637.JPG"},
            { src: "/entry/j/gallery_photos/063.JPG"},
            { src: "/entry/j/gallery_photos/E08_2279.jpg"},
            { src: "/entry/j/gallery_photos/IMG_2759.JPG"},
            { src: "/entry/j/gallery_photos/IMG_4550.JPG"},
            { src: "/entry/j/gallery_photos/IMG_4108.JPG"},
            { src: "/entry/j/gallery_photos/IMG_2857.JPG"},
            { src: "/entry/j/gallery_photos/E08_1451.jpg"},
            { src: "/entry/j/gallery_photos/IMG_3140.JPG"},
            { src: "/entry/j/gallery_photos/IMG_5258.JPG"},
            { src: "/entry/j/gallery_photos/E08_1777.jpg"},
            { src: "/entry/j/gallery_photos/IMG_4412.JPG"},
            { src: "/entry/j/gallery_photos/IMG_7965.JPG"},
            { src: "/entry/j/gallery_photos/IMG_8042.JPG"},
            { src: "/entry/j/gallery_photos/IMG_4256.jpg"},
            { src: "/entry/j/gallery_photos/042_IMG_7604.JPG"},
            { src: "/entry/j/gallery_photos/IMG_7984.JPG"},
            { src: "/entry/j/gallery_photos/IMG_3129.JPG"},
            { src: "/entry/j/gallery_photos/080_IMG_7662.JPG"},
            { src: "/entry/j/gallery_photos/IMG_4711.jpg"},
            { src: "/entry/j/gallery_photos/IMG_7901.JPG"},
            { src: "/entry/j/gallery_photos/IMG_8057.JPG"},
            { src: "/entry/j/gallery_photos/IMG_2996.JPG"},
            { src: "/entry/j/gallery_photos/195.JPG"},
            { src: "/entry/j/gallery_photos/IMG_2926.JPG"},
            { src: "/entry/j/gallery_photos/039_IMG_3794.JPG"},
            { src: "/entry/j/gallery_photos/IMG_1338.jpg"},
            { src: "/entry/j/gallery_photos/E08_2259pepe.jpg"},
            { src: "/entry/j/gallery_photos/_MG_3997-2.jpg"},
            { src: "/entry/j/gallery_photos/IMG_3214.JPG"},
            { src: "/entry/j/gallery_photos/E08_1736.jpg"},
            { src: "/entry/j/gallery_photos/E08_1449.jpg"},
            { src: "/entry/j/gallery_photos/IMG_8027.JPG"},
            { src: "/entry/j/gallery_photos/IMG_4651.JPG"},
            { src: "/entry/j/gallery_photos/IMG_3831.jpg"},
            { src: "/entry/j/gallery_photos/001_IMG_3759.JPG"},
            { src: "/entry/j/gallery_photos/IMG_4098.JPG"},
            { src: "/entry/j/gallery_photos/IMG_8049.JPG"},
            { src: "/entry/j/gallery_photos/IMG_3057.JPG"},
            { src: "/entry/j/gallery_photos/IMG_4170(Madelyn).JPG"},
            { src: "/entry/j/gallery_photos/E08_1756.jpg"},
            { src: "/entry/j/gallery_photos/IMG_5256.JPG"},
            { src: "/entry/j/gallery_photos/IMG_5249.JPG"},
            { src: "/entry/j/gallery_photos/IMG_4547.JPG"},
            { src: "/entry/j/gallery_photos/E08_1730.jpg"},
            { src: "/entry/j/gallery_photos/IMG_7930.JPG"},
            { src: "/entry/j/gallery_photos/IMG_4404.JPG"},
            { src: "/entry/j/gallery_photos/_MG_3980-2.jpg"},
            { src: "/entry/j/gallery_photos/IMG_5278.JPG"},
            { src: "/entry/j/gallery_photos/E08_1027.jpg"},
            { src: "/entry/j/gallery_photos/IMG_2814.JPG"},
            { src: "/entry/j/gallery_photos/057_IMG_7639.JPG"},
            { src: "/entry/j/gallery_photos/IMG_4418.JPG"},
            { src: "/entry/j/gallery_photos/IMG_3069.JPG"},
            { src: "/entry/j/gallery_photos/E08_1618.jpg"},
            { src: "/entry/j/gallery_photos/IMG_4654.JPG"},
            { src: "/entry/j/gallery_photos/E08_2258.jpg"},
            { src: "/entry/j/gallery_photos/IMG_3815-2.jpg"},
            { src: "/entry/j/gallery_photos/E08_1704.jpg"},
            { src: "/entry/j/gallery_photos/IMG_3662.JPG"},
            { src: "/entry/j/gallery_photos/E08_1702.jpg"},
            { src: "/entry/j/gallery_photos/IMG_4247.JPG"},
            { src: "/entry/j/gallery_photos/E08_1776.jpg"},
            { src: "/entry/j/gallery_photos/E08_1648.jpg"},
            { src: "/entry/j/gallery_photos/IMG_5269.JPG"},
            { src: "/entry/j/gallery_photos/E08_2287.jpg"},
            { src: "/entry/j/gallery_photos/E08_1703.jpg"},
            { src: "/entry/j/gallery_photos/IMG_4154.JPG"},
            { src: "/entry/j/gallery_photos/193.JPG"},
            { src: "/entry/j/gallery_photos/IMG_3823.jpg"},
            { src: "/entry/j/gallery_photos/IMG_1448.jpg"},
            { src: "/entry/j/gallery_photos/IMG_3819.jpg"},
            { src: "/entry/j/gallery_photos/IMG_4222.jpg"},
            { src: "/entry/j/gallery_photos/E08_1647.jpg"},
            { src: "/entry/j/gallery_photos/IMG_4173.JPG"},
            { src: "/entry/j/gallery_photos/IMG_4240.JPG"},
            { src: "/entry/j/gallery_photos/E08_1628.jpg"},
            { src: "/entry/j/gallery_photos/E08_2289.jpg"},
            { src: "/entry/j/gallery_photos/103_IMG_7701.JPG"},
            { src: "/entry/j/gallery_photos/IMG_4081.JPG"},
            { src: "/entry/j/gallery_photos/E08_1715.jpg"},
            { src: "/entry/j/gallery_photos/IMG_3646.JPG"}

          ]}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox}
          showThumbnails={this.props.showThumbnails}
          theme={this.props.theme}
        />
      </div>
    );
  }
}


export default Photos;