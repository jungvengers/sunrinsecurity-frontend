import React from 'react';
import { Editor } from 'react-draft-wysiwyg';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const WysiwygEditor = ({ content, uploadedImages, changeContent, addImage }) => {
    const handleUpload = (file) => {
        console.log(uploadedImages);
        addImage(file);

        const imageObject = {
            file: file,
            localSrc: URL.createObjectURL(file),
        };

        return new Promise((resolve, reject) => {
            resolve({ data: { link: imageObject.localSrc } });
        });
    };
    return (
        <Editor
            wrapperClassName="wrapper-class"
            editorClassName="editor"
            toolbarClassName="toolbar-class"
            editorState={content}
            onEditorStateChange={changeContent}
            toolbar={{
                options: ['inline', 'blockType', 'fontSize', 'textAlign', 'colorPicker', 'link', 'image'],
                inDropdown: false,
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                link: { inDropdown: true },
                history: { inDropdown: false },
                image: {
                    urlEnabled: true,
                    uploadEnabled: true,
                    deletionEnabled: true,
                    uploadCallback: handleUpload,
                    alignmentEnabled: true,
                    inputAccept: 'image/jpeg,image/jpg,image/png',
                    defaultSize: {
                        height: 'auto',
                        width: '600',
                    },
                },
            }}
            placeholder="내용을 작성해주세요."
            // 한국어 설정
            localization={{
                locale: 'ko',
            }}
        />
    );
};

export default WysiwygEditor;
