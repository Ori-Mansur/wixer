'use strict'
export default {
    uploadImg

}
function uploadImg(ev) {
    console.log(ev.target.files)
    const CLOUD_NAME = 'dw9jjocrg'
    const PRESET_NAME = 'fvtdza8b'
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`


    const formData = new FormData();
    formData.append('file', ev.target.files[0])
    formData.append('upload_preset', PRESET_NAME);
    return fetch(UPLOAD_URL, {
        method: 'POST',
        body: formData
    })
        .then(res => res.json())
        .then(res => res.url)
        .catch(err => console.error(err))
}