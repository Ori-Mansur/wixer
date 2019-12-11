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
    type: 'Header',
    name: 'Header',
    icon: 'fa fa-header fa-2x',
    style: {
      bcgImg: '',
      bcgColor: '',
      height: 90
    },
    data: [
      {
        _id: 'he1001',
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
      },
      {
        _id: 'he1002',
        type: 'TextEl',
        name: 'Title',
        icon: 'fa fa-font fa-2x',
        text: 'Insert Subtitle',
        style: {
          color: 'black',
          fontSize: 20,
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
    _id: 'crd1002',
    type: 'SectionHorizental',
    name: 'Multi Card',
    icon: 'fa fa-address-card fa-2x',
    style: { bcgImg: '', bcgColor: '' },
    data: [{
      _id: 'card1001',
      type: 'card',
      name: 'Card',
      icon: 'fa fa-align-left fa-2x',
      sectionList: 'sectionList',
      style: { bcgImg: '', bcgColor: '' },
      data: [
        {
          _id: 'ca1001',
          type: 'Img',
          name: 'Image',
          icon: 'fa fa-image fa-2x',
          data: {
            url: 'https://res.cloudinary.com/dw9jjocrg/image/upload/v1575890067/placeholder-img-4_wty056.jpg'
          }
        },
        {
          _id: 'ca1002',
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
        },
        {
          _id: 'ca1003',
          type: 'Txt',
          name: 'Text',
          icon: 'fa fa-font fa-3x',
          text:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab laboriosam aliquam, porro harum libero assumenda modi illum placeat iusto.',
          style: {
            color: 'black',
            fontSize: 16,
            fontWeight: 'normal',
            fontFamily: 'Arial',
            fontStyle: 'normal',
            txtAlign: 'center'
          }
        },
      ]
    }, {
      _id: 'card1002',
      type: 'card',
      name: 'Card',
      icon: 'fa fa-align-left fa-2x',
      sectionList: 'sectionList',
      style: { bcgImg: '', bcgColor: '' },
      data: [
        {
          _id: 'ca1001',
          type: 'Img',
          name: 'Image',
          icon: 'fa fa-image fa-2x',
          data: {
            url: 'https://res.cloudinary.com/dw9jjocrg/image/upload/v1575890067/placeholder-img-4_wty056.jpg'
          }
        },
        {
          _id: 'ca1002',
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
        },
        {
          _id: 'ca1003',
          type: 'Txt',
          name: 'Text',
          icon: 'fa fa-font fa-3x',
          text:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab laboriosam aliquam, porro harum libero assumenda modi illum placeat iusto.',
          style: {
            color: 'black',
            fontSize: 16,
            fontWeight: 'normal',
            fontFamily: 'Arial',
            fontStyle: 'normal',
            txtAlign: 'center'
          }
        },
      ]
    }, {
      _id: 'card1003',
      type: 'card',
      name: 'Card',
      icon: 'fa fa-align-left fa-2x',
      sectionList: 'sectionList',
      style: { bcgImg: '', bcgColor: '' },
      data: [
        {
          _id: 'ca1001',
          type: 'Img',
          name: 'Image',
          icon: 'fa fa-image fa-2x',
          data: {
            url: 'https://res.cloudinary.com/dw9jjocrg/image/upload/v1575890067/placeholder-img-4_wty056.jpg'
          }
        },
        {
          _id: 'ca1002',
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
        },
        {
          _id: 'ca1003',
          type: 'Txt',
          name: 'Text',
          icon: 'fa fa-font fa-3x',
          text:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab laboriosam aliquam, porro harum libero assumenda modi illum placeat iusto.',
          style: {
            color: 'black',
            fontSize: 16,
            fontWeight: 'normal',
            fontFamily: 'Arial',
            fontStyle: 'normal',
            txtAlign: 'center'
          }
        },
      ]
    },]
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
    icon: 'fa fa-map fa-2x',
    style: { bcgImg: '', bcgColor: '' },
    data: {
      currentPlace: null,
      locations: [],
      center: { lat: 32.109333, lng: 34.855499 },
      businessInfo: { openOn: { week: '', sat: '', sun: '' }, email: '', phone: '' }

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
    _id: 'el1001',
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
    _id: 'el1002',
    type: 'Video',
    name: 'Video',
    icon: 'fa fa-youtube fa-2x',
    data: {
      url: 'https://www.youtube.com/embed/mO3Q4bRQZ3k'
    }
  },
  {
    _id: 'el1003',
    type: 'Img',
    name: 'Image',
    icon: 'fa fa-image fa-2x',
    data: {
      url: 'https://res.cloudinary.com/dw9jjocrg/image/upload/v1575890067/placeholder-img-4_wty056.jpg'
    }
  },
  {
    _id: 'el1004',
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
  },
  {
    _id: 'el1005',
    type: 'card',
    name: 'Card',
    icon: 'fa fa-align-left fa-2x',
    sectionList: 'sectionList',
    style: { bcgImg: '', bcgColor: '' },
    data: [
      {
        _id: 'ca1001',
        type: 'Img',
        name: 'Image',
        icon: 'fa fa-image fa-2x',
        data: {
          url: 'https://res.cloudinary.com/dw9jjocrg/image/upload/v1575890067/placeholder-img-4_wty056.jpg'
        }
      },
      {
        _id: 'ca1002',
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
      },
      {
        _id: 'ca1003',
        type: 'Txt',
        name: 'Text',
        icon: 'fa fa-font fa-3x',
        text:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab laboriosam aliquam, porro harum libero assumenda modi illum placeat iusto.',
        style: {
          color: 'black',
          fontSize: 16,
          fontWeight: 'normal',
          fontFamily: 'Arial',
          fontStyle: 'normal',
          txtAlign: 'center'
        }
      },
    ]
  },
  {
    _id: '5de4c99dfxaxccsacsc026x',
    type: 'FrameFacebook',
    icon: 'fa fa-facebook-square fa-2x',
    name: 'Facebook',
    data: {}
  },

  {
    _id: 'el1007',
    type: 'FormV',
    icon: 'fa fa-envelope-open fa-2x',
    name: 'Form Horizental',
    data: {}
  }
];
