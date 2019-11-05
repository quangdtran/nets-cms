import { postDetail as type } from '@constants/action-type';
import imageService from '@src/services/image.service';

export const uploadImageSuccess = () => {
  return {
    type: type.UPLOAD_IMAGE_SUCCESS,
  };
};

export const uploadImageFail = () => {
  return {
    type: type.UPLOAD_IMAGE_FAIL,
    payload: {},
  };
};

export const uploadImage = (imageBase64) => {
  return async (dispatch) => {
    dispatch({ type: type.UPLOAD_IMAGE });
    try {
      const response = await imageService.upload(imageBase64);
    } catch (error) {
      dispatch();
    }
  };
};
