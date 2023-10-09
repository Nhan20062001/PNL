'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import type {
  UploadBeforeHandler,
  UploadBeforeReturn,
} from 'suneditor-react/dist/types/upload';

import { useAppDispatch } from '@/store';
import { encryptCloudMediaKey } from '@/utils/encryptCloudMediaKey';
import { postUploadImageAction } from '@/store/upload/upload.action';
import 'suneditor/dist/css/suneditor.min.css';
import './style.scss';

const SunEditor = dynamic(() => import('suneditor-react'), {
  ssr: false,
});

type Props = {
  contentEditor: string;
  onChangeContentEditor?: (newContent: string) => void;
};

function Editor({ contentEditor, onChangeContentEditor }: Props) {
  const dispatch = useAppDispatch();

  const handleImageUploadBefore = (
    files: File[],
    _: object,
    uploadHandler: UploadBeforeHandler,
  ): UploadBeforeReturn => {
    let result: UploadBeforeReturn;

    (async () => {
      try {
        const res: any = await dispatch(
          postUploadImageAction({
            key: encryptCloudMediaKey(),
            file: files[0],
          }),
        );
        // eslint-disable-next-line no-shadow
        const result = [
          {
            url: res.payload.data?.result,
            name: res.payload.data?.originalname,
            size: 100,
          },
        ];

        uploadHandler({ result });
      } catch (error) {
        uploadHandler({
          errorMessage: 'Error uploading image',
          result: [],
        });
      }
    })();

    return result;
  };

  return (
    <SunEditor
      name="content"
      setContents={contentEditor || ''}
      onChange={onChangeContentEditor}
      setOptions={{
        height: '200',
        buttonList: [
          [
            'formatBlock',
            'font',
            'fontSize',
            'fontColor',
            'align',
            'paragraphStyle',
            'blockquote',
          ],
          ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
          ['removeFormat'],
          ['outdent', 'indent'],
          ['table', 'list'],
          ['link', 'image', 'video'],
          ['preview', 'print'],
          ['undo', 'redo'],
        ],
        defaultTag: 'div',
        showPathLabel: false,
      }}
      onImageUploadBefore={handleImageUploadBefore}
    />
  );
}

Editor.defaultProps = {
  onChangeContentEditor: () => {}, // Giá trị mặc định ở đây là một hàm trống
};
export default Editor;
