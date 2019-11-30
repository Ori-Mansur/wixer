'use strict';
import HttpService from './HttpService.js';
import cloudinaryService from './cloudinary.service.js';

export default {
  query,
  getById,
  add,
  update,
  remove
};
// const BASE_URL =
//   process.env.NODE_ENV !== 'development'
//     ? '/api/widget'
//     : '//localhost:3150/api/widget';

const BASE_URL = 'widget'
// function query() {
//   return widgets;
// }
async function query() {
  return await HttpService.get(BASE_URL)
}
async function getById(id) {
  const res = await HttpService.get(`${BASE_URL}/${id}`);
  return await res.data;
}
function add(widget) {
  if (typeof widget.imgUrl !== 'string')
    return cloudinaryService
      .uploadImg(widget.imgUrl)
      .then(res => res.url)
      .then(url => {
        widget.imgUrl = url;
        return HttpService.post(BASE_URL, widget).then(res => res.data);
      });
  else return HttpService.post(BASE_URL, widget).then(res => res.data);
}
function update(widget) {
  if (typeof widget.imgUrl !== 'string')
    return cloudinaryService
      .uploadImg(widget.imgUrl)
      .then(res => res.url)
      .then(url => {
        widget.imgUrl = url;
        return HttpService
          .put(`${BASE_URL}/${widget._id}`, widget)
          .then(res => res.data);
      });
  else
    return HttpService
      .put(`${BASE_URL}/${widget._id}`, widget)
      .then(res => res.data);
}
async function remove(id) {
  const res = await HttpService.delete(`${BASE_URL}/${id}`);
  return await res.data;
}
