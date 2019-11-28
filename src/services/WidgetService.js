'use strict';
import httpService from './http-service.js';
import cloudinaryService from './cloudinary.service.js';

export default {
  query,
  getById,
  add,
  update,
  remove
};
const BASE_URL =
  process.env.NODE_ENV !== 'development'
    ? '/api/widget'
    : '//localhost:3150/api/widget';

const widgets = [
  {
    id: 's1001',
    type: 'header',
    data: {
      title: 'this is the title',
      subtitle: 'this is the subtitle',
      logo: 'img/logo.jpg'
    }
  },
  {
    id: 's1002',
    type: 'NavBar',
    data: {
      title: 'this is the title',
      subtitle: 'this is the subtitle',
      logo: 'img/logo.jpg'
    }
  },
  {
    id: 's1003',
    type: 'Container1',
    data: {
      title: 'this is the title',
      subtitle: 'this is the subtitle',
      logo: 'img/logo.jpg'
    }
  },
  {
    id: 's1008',
    type: 'Container2',
    data: [
      {
        type: 'Map',
        data: {
          pos: { lat: 34, lng: 32.4349958 },
          markers: [
            { position: { lat: 32.0853, lng: 34.781769 } },
            { position: { lat: 32.434048, lng: 34.919651 } },
            { position: { lat: 31.768318, lng: 35.213711 } }
          ]
        }
      },
      {
        type: 'Txt',
        data: {
          Txt:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab laboriosam aliquam, porro harum libero assumenda modi illum placeat iusto, sed quidem ut dolore iure corrupti expedita. Enim, velit necessit. Ab laboriosam aliquam, porro harum libero assumenda modi illum placeat iusto, sed quidem ut dolore iure corrupti expedita. Enim, velit necessitatibus! Mollitia!'
        }
      }
    ]
  },
  {
    id: 's1004',
    type: 'Container3',
    data: {
      title: 'this is the title',
      subtitle: 'this is the subtitle',
      logo: 'img/logo.jpg'
    }
  },
  {
    id: 's1005',
    type: 'Txt',
    data: {
      title: 'this is the title',
      subtitle: 'this is the subtitle',
      logo: 'img/logo.jpg'
    }
  },
  {
    id: 's1006',
    type: 'VideoAndTxt',
    data: {
      title: 'this is the title',
      subtitle: 'this is the subtitle',
      logo: 'img/logo.jpg'
    }
  },
  {
    id: 's1007',
    type: 'Form',
    data: {}
  }
];
function query() {
  return widgets;
}
// async function query1() {
//     const res = await httpService.get(BASE_URL)
//     return await res.data
// }
async function getById(id) {
  const res = await httpService.get(`${BASE_URL}/${id}`);
  return await res.data;
}
function add(widget) {
  if (typeof widget.imgUrl !== 'string')
    return cloudinaryService
      .uploadImg(widget.imgUrl)
      .then(res => res.url)
      .then(url => {
        widget.imgUrl = url;
        return httpService.post(BASE_URL, widget).then(res => res.data);
      });
  else return httpService.post(BASE_URL, widget).then(res => res.data);
}
function update(widget) {
  if (typeof widget.imgUrl !== 'string')
    return cloudinaryService
      .uploadImg(widget.imgUrl)
      .then(res => res.url)
      .then(url => {
        widget.imgUrl = url;
        return httpService
          .put(`${BASE_URL}/${widget._id}`, widget)
          .then(res => res.data);
      });
  else
    return httpService
      .put(`${BASE_URL}/${widget._id}`, widget)
      .then(res => res.data);
}
async function remove(id) {
  const res = await httpService.delete(`${BASE_URL}/${id}`);
  return await res.data;
}
