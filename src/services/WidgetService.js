'use strict';
import HttpService from './HttpService.js';
import utils from './UtilsService.js';

export default {
  query,
  getById,
  queryElements,
  addId
};

const BASE_URL = 'widget';
function addId(widget) {
  widget._id = utils.makeId();
  widget.data.map(widget => {
    widget._id = utils.makeId();
  });
  return widget;
}

async function query() {
  return await sections;
}
async function queryElements() {
  return await elements;
}

async function getById(id) {
  const res = await HttpService.get(`${BASE_URL}/${id}`);
  return await res.data;
}

const sections = [
  {
    type: 'HeaderBig',
    name: 'Big Header',
    icon: 'fa fa-header fa-2x',
    style: {
      bcgImg: '',
      bcgColor: '',
      height: 90
    },
    data: [
      {
        _id: 'big1001',
        text: 'Insert Title',
        style: {
          color: 'black',
          fontSize: 30,
          fontWeight: 'normal',
          fontFamily: 'Arial',
          fontStyle: 'normal',
          txtAlign: 'center'
        }
      },
      {
        _id: 'big1002',
        text: 'Insert Subtitle',
        style: {
          color: 'black',
          fontSize: 16,
          fontWeight: 'normal',
          fontFamily: 'Arial',
          fontStyle: 'normal',
          txtAlign: 'center'
        }
      }
    ]
  },
  {
    type: 'Card1',
    name: 'Card',
    icon: 'fa fa-address-card fa-2x',
    style: {
      bcgImg: '',
      bcgColor: '',
      height: 90,
      width: 90
    },
    data: [
      {
        text: 'Lorem ipsum',
        style: {
          color: 'black',
          fontSize: 22,
          fontWeight: 'normal',
          fontFamily: 'Arial',
          fontStyle: 'normal',
          txtAlign: 'center'
        }
      },
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        style: {
          color: 'black',
          fontSize: 16,
          fontWeight: 'normal',
          fontFamily: 'Arial',
          fontStyle: 'normal',
          txtAlign: 'center'
        }
      }
    ]
  },
  {
    type: 'Paragraph',
    name: 'Paragraph',
    icon: 'fa fa-align-left fa-2x',
    style: {
      bcgImg: '',
      bcgColor: '',
      height: 400
    },
    data: [
      {
        text:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        style: {
          color: 'black',
          fontSize: 16,
          fontWeight: 'normal',
          fontFamily: 'Arial',
          fontStyle: 'normal',
          txtAlign: 'center'
        }
      }
    ]
  },
  {
    type: 'CardsContainer',
    name: 'Multi Card',
    icon: 'fa fa-address-card fa-2x',
    style: {
      bcgImg: '',
      bcgColor: ''
    },
    data: [
      {
        _id: 'crd1001',
        type: 'Card1',
        name: 'Card',
        style: {
          bcgImg: '',
          bcgColor: '',
          height: 90,
          width: 90
        },
        data: [
          {
            text: 'Lorem ipsum',
            style: {
              color: 'black',
              fontSize: 22,
              fontWeight: 'normal',
              fontFamily: 'Arial',
              fontStyle: 'normal',
              txtAlign: 'center'
            }
          },
          {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            style: {
              color: 'black',
              fontSize: 16,
              fontWeight: 'normal',
              fontFamily: 'Arial',
              fontStyle: 'normal',
              txtAlign: 'center'
            }
          }
        ]
      },
      {
        _id: 'crd1002',
        type: 'Card1',
        name: 'Card',
        style: {
          bcgImg: '',
          bcgColor: '',
          height: 90,
          width: 90
        },
        data: [
          {
            text: 'Lorem ipsum',
            style: {
              color: 'black',
              fontSize: 22,
              fontWeight: 'normal',
              fontFamily: 'Arial',
              fontStyle: 'normal',
              txtAlign: 'center'
            }
          },
          {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            style: {
              color: 'black',
              fontSize: 16,
              fontWeight: 'normal',
              fontFamily: 'Arial',
              fontStyle: 'normal',
              txtAlign: 'center'
            }
          }
        ]
      },
      {
        _id: 'crd1003',
        type: 'Card1',
        name: 'Card',
        style: {
          bcgImg: '',
          bcgColor: '',
          height: 90,
          width: 90
        },
        data: [
          {
            text: 'Lorem ipsum',
            style: {
              color: 'black',
              fontSize: 22,
              fontWeight: 'normal',
              fontFamily: 'Arial',
              fontStyle: 'normal',
              txtAlign: 'center'
            }
          },
          {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            style: {
              color: 'black',
              fontSize: 16,
              fontWeight: 'normal',
              fontFamily: 'Arial',
              fontStyle: 'normal',
              txtAlign: 'center'
            }
          }
        ]
      }
    ]
  },
  {
    type: 'NavBar',
    name: 'NavBar',
    icon: 'fa fa-bars fa-2x',
    data: {
      title: 'this is the title',
      subtitle: 'this is the subtitle',
      logo: 'img/logo.jpg'
    }
  },
  // {
  //   _id: '5de377c778a07666601168ff',
  //   type: 'Form',
  //   icon: 'fa fa-envelope-open fa-2x',
  //   name: 'Form',
  //   data: {
  //     style: {
  //       bcgImg: '',
  //       bcgColor: 'white'
  //     }
  //   }
  // },

  {
    _id: '5de4c99aca73df026cca7457',
    type: 'FormInline',
    name: 'Form Inline',
    icon: 'fa fa-envelope-open fa-2x',
    data: {}
  },

  {
    _id: '5de4c99dfxaxccsacsc026x',
    type: 'FrameFacebook',
    icon: 'fa fa-facebook-square fa-2x',
    name: 'Facebook',
    data: {}
  },
  {
    _id: '5de4c99dfxaxcchjvhucasklmcssacsc026x',
    type: 'SectionContainer',
    name: 'Section',
    icon: 'fa fa-align-left fa-2x',
    sectionList: 'sectionList',
    style: { bcgImg: '', bcgColor: '' },
    data: []
  },
  {
    _id: '0001',
    type: 'Map',
    name: 'Map',
    data: {
      center: { lat: 32.109333, lng: 34.855499 },
      markers: [],
      places: [],
      placesMarked: [],
      placesNames: [],
      currentPlace: '',
      placeName: '',
      place: ''
    }
  },
  {
    _id: '5de4c99dfxaxcchjvhucasklmcssacsc026x',
    type: 'SectionHorizental',
    name: 'Section Horizental',
    icon: 'fa fa-align-left fa-2x',
    sectionList: 'sectionList',
    style: { bcgImg: '', bcgColor: '' },
    data: []
  }
];

const elements = [
  {
    _id: '5de3deff1c9d44000049e80e',
    type: 'Txt',
    name: 'Text',
    icon: 'fa fa-font fa-3x',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab laboriosam aliquam, porro harum libero assumenda modi illum placeat iusto, sed quidem ut dolore iure corrupti expedita. Enim, velit necessitatibus! Mollitia! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab laboriosam aliquam, porro harum libero assumenda modi illum placeat iusto, sed quidem ut dolore iure corrupti expedita. Enim, velit necessitatibus! Mollitia!',
    style: {
      color: 'black',
      fontSize: 16,
      fontWeight: 'normal',
      fontFamily: 'Arial',
      fontStyle: 'normal',
      txtAlign: 'center'
    }
  },
  {
    _id: 'el1001',
    type: 'Video',
    name: 'Video',
    icon: 'fa fa-youtube fa-2x',
    data: {
      url: 'https://www.youtube.com/embed/mO3Q4bRQZ3k'
    }
  },
  {
    _id: 'el1002',
    type: 'TextEl',
    name: 'Title',
    icon: 'fa fa-font fa-2x',
    text: 'Insert Title',
    style: {
      color: 'black',
      fontSize: 30,
      fontWeight: 'normal',
      fontFamily: 'Arial',
      fontStyle: 'normal',
      txtAlign: 'center'
    }
  }
  // {
  //   _id: 'el1004',
  //   type: 'FormV',
  //   icon: 'fa fa-envelope-open fa-2x',
  //   name: 'Form Horizental',
  //   data: {}
  // }
];
