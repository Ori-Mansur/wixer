'use strict';
import HttpService from './HttpService.js';
// import cloudinaryService from './cloudinary.service.js';

export default {
  query,
  getById,
  queryElements
};
// const BASE_URL =
//   process.env.NODE_ENV !== 'development'
//     ? '/api/widget'
//     : '//localhost:3150/api/widget';

const BASE_URL = 'widget'

const widgets = [
  {
      "_id": "5de3765078a07666601168f9",
      "type": "HeaderBig",
      "data": {
          "title": "Lorem Impsum",
          "subtitle": "Lorem Shmiptsum",
          "style": {
              "bcgImg": "https://d279m997dpfwgl.cloudfront.net/wp/2016/08/0826_yellowstone-stars-2-1000x667.jpg",
              "txtTitleColor": "White",
              "txtSubtitleColor": "red",
              "bcgColor": "white",
              "height": 400,
              "color": "",
              "fontStyle": ""
          }
      },
      "createdAt": "2019-12-01T08:14:08.280Z",
      "fontFamily": "",
      "fontWeight": "",
      "fontSize": 16,
      "color": ""
  },
  {
      "_id": "5de3767f78a07666601168fa",
      "type": "NavBar",
      "data": {
          "title": "this is the title",
          "subtitle": "this is the subtitle",
          "logo": "img/logo.jpg"
      },
      "createdAt": "2019-12-01T08:14:55.611Z"
  },
  {
      "_id": "5de377c778a07666601168ff",
      "type": "Form",
      "data": {
          "style": {
              "bcgImg": "",
              "bcgColor": "white"
          }
      },
      "createdAt": "2019-12-01T08:20:23.556Z"
  },
  {
      "_id": "5de3783378a0766660116900",
      "type": "TxtAndMap",
      "data": [
          {
              "type": "Map",
              "data": {
                  "pos": {
                      "lat": 34,
                      "lng": 32.4349958
                  },
                  "markers": [
                      {
                          "position": {
                              "lat": 32.0853,
                              "lng": 34.781769
                          }
                      },
                      {
                          "position": {
                              "lat": 32.434048,
                              "lng": 34.919651
                          }
                      },
                      {
                          "position": {
                              "lat": 31.768318,
                              "lng": 35.213711
                          }
                      }
                  ]
              }
          },
          {
              "type": "Txt",
              "data": {
                  "title": "a little more",
                  "txt": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab laboriosam aliquam, porro harum libero assumenda modi illum placeat iusto, sed quidem ut dolore iure corrupti expedita. Enim, velit necessitatibus! Mollitia! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab laboriosam aliquam, porro harum libero assumenda modi illum placeat iusto, sed quidem ut dolore iure corrupti expedita. Enim, velit necessitatibus! Mollitia!",
                  "style": {
                      "bcgImg": "",
                      "bcgColor": "white"
                  }
              }
          }
      ],
      "createdAt": "2019-12-01T08:22:11.262Z"
  },
  {
      "_id": "5de37ad378a0766660116903",
      "type": "VideoAndTxt",
      "style": {
          "bcgImg": "",
          "bcgColor": "white"
      },
      "data": [
          {
              "type": "Txt",
              "style": {
                  "bcgImg": "",
                  "bcgColor": "white"
              },
              "data": {
                  "style": {
                      "fontFamily": "Arial",
                      "fontSize": 16,
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "color": "black"
                  },
                  "txt": "This is the first text element"
              }
          },
          {
              "type": "Video",
              "data": {
                  "url": "https://www.youtube.com/embed/mO3Q4bRQZ3k"
              }
          }
      ],
      "createdAt": "2019-12-01T08:33:23.783Z"
  },
  {
      "_id": "5de3a33578a076666011691f",
      "type": "About",
      "data": {
          "title": "OUR TEAM LEADERS",
          "mainTxt": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
          "cards": [
              {
                  "img": "https://www.clipartwiki.com/clipimg/detail/149-1490051_computer-icons-user-profile-male-my-profile-icon.png",
                  "title": "Javier Bardem",
                  "txt": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              },
              {
                  "img": "https://www.clipartwiki.com/clipimg/detail/149-1490051_computer-icons-user-profile-male-my-profile-icon.png",
                  "title": "Hugo Silva",
                  "txt": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              },
              {
                  "img": "https://www.clipartwiki.com/clipimg/detail/149-1490051_computer-icons-user-profile-male-my-profile-icon.png",
                  "title": "Imanol Arias",
                  "txt": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              }
          ]
      },
      "createdAt": "2019-12-01T11:25:41.355Z"
  },
  {
      "_id": "5de3c27e0dd08d6cc18095da",
      "type": "HeaderSmall",
      "data": {
          "title": "Welcome To My Website",
          "style": {
              "bcgImg": "https://png.pngtree.com/thumb_back/fw800/background/20190223/ourmid/pngtree-early-morning-office-background-design-backgroundillustration-backgroundoffice-backgroundadvertising-image_64568.jpg",
              "txtTitleColor": "White",
              "bcgColor": "white",
              "height": 200,
              "color": "",
              "fontFamily": "",
              "fontSize": 16,
              "fontStyle": "",
              "fontWeight": ""
          }
      },
      "createdAt": "2019-12-01T13:39:10.508Z"
  },
  {
      "_id": "5de3deff1c9d44000049e80e",
      "type": "Txt",
      "data": {
          "txt": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab laboriosam aliquam, porro harum libero assumenda modi illum placeat iusto, sed quidem ut dolore iure corrupti expedita. Enim, velit necessitatibus! Mollitia! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab laboriosam aliquam, porro harum libero assumenda modi illum placeat iusto, sed quidem ut dolore iure corrupti expedita. Enim, velit necessitatibus! Mollitia!",
          "style": {
              "fontFamily": "Arial",
              "fontSize": 16,
              "fontStyle": "normal",
              "fontWeight": "normal",
              "color": "black",
              "bcgImg": "",
              "bcgColor": ""
          }
      },
      "createdAt": "2019-12-01T08:18:35.184Z"
  },
  {
      "_id": "5de4c99aca73df026cca7457",
      "type": "FormInline",
      "data": {},
      "createdAt": "2019-12-02T08:21:46.753Z"
  },
  {
      "_id": "5de4c99aca73df026x",
      "type": "HeaderSurfe",
      "data": {},
      "createdAt": "2019-12-02T08:21:46.753Z"
  },
  {
      "_id": "5de4c99df026x",
      "type": "MainCardSurfe",
      "data": {},
      "createdAt": "2019-12-02T08:21:46.753Z"
  },
  {
      "_id": "5de4c99dfxaxcsc026x",
      "type": "AboutUsSurfe",
      "data": {},
      "createdAt": "2019-12-02T08:21:46.753Z"
  },
  {
      "_id": "5de4c99dfxaxcsc026x",
      "type": "OurTeamSurfe",
      "data": {},
      "createdAt": "2019-12-02T08:21:46.753Z"
  },
  {
      "_id": "5de4c99dfxaxccsacsc026x",
      "type": "FrameSurfe",
      "data": {},
      "createdAt": "2019-12-02T08:21:46.753Z"
  }
]

    

async function query() {
  return await widgets;
}

const elements = []
async function queryElements(){
  return await elements
}
// async function query() {
//   return await HttpService.get(BASE_URL)
// }
async function getById(id) {
  const res = await HttpService.get(`${BASE_URL}/${id}`);
  return await res.data;
}

