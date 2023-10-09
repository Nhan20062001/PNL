import { instanceAxios } from '@/config/axios';
import {
  ParamDeleteUploadImage, ParamDeleteUploadVideo, ParamPostUploadImage, ParamPostUploadVideo,
} from './upload.type';

const upload = {
  postUploadImage({ key, file }: ParamPostUploadImage): Promise<any> {
    const url = '/upload/single-image';
    const formData = new FormData();
    formData.append('files', file);
    return instanceAxios.post(`${url}?key=${key}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  deleteUploadImage({ key, id }: ParamDeleteUploadImage): Promise<any> {
    const url = '/upload/assets';
    return instanceAxios.delete(`${url}?key=${key}&url=${id}`, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  //
  postUploadVideo({ key, file }: ParamPostUploadVideo): Promise<any> {
    const url = '/upload/single-video';
    const formData = new FormData();
    formData.append('files', file);
    return instanceAxios.post(`${url}?key=${key}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  deleteUploadVideo({ key, id }: ParamDeleteUploadVideo): Promise<any> {
    const url = '/upload/assets';
    return instanceAxios.delete(`${url}?key=${key}&url=${id}`, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

export default upload;
