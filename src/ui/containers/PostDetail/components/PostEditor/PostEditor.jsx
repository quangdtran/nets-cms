import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  upload as uploadImage,
} from '@src/services/image.service';

import { Editor } from '@tinymce/tinymce-react';

import { EditorLoading } from './components/EditorLoading';

const WrapPostEditor = styled.div`
  position: relative;
  width: 85%;
`;

class PostEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isUploading: false,
      content: '',
    };
  }

  // LIFECYCLE
  componentDidMount() {
    // this.addContentToMCE();
  }

  // METHODS
  handleEditorOnChange(editorState) {
    this.setState({ editorState });
  }

  render() {
    const { isUploading } = this.state;
    const { content } = this.props;
    return (
      <WrapPostEditor>
        <Editor
          ref="mce-editor"
          apiKey="7f5kslltrbhitfkq69hyamxps6dtacbb14xl284duxljhrhz"
          content_style="
            border-radius: 4px !important;
          "
          init={{
            plugins: 'link image code imagetools paste preview',
            // menubar: false,
            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code | image preview',
            contextmenu: 'paste | link image inserttable | cell row column deletetable',
            paste_data_images: true,
            images_upload_handler: async (blobInfo, success, failure) => {
              this.setState({ isUploading: true });
              try {
                const response = await uploadImage(blobInfo.base64());
                success(response.data.data.link);
                this.setState({ isUploading: false });
              } catch (error) {
                failure(error);
                this.setState({ isUploading: false });
              }
            },
          }}
          value={content}
          onEditorChange={
            newContent => this.props.setContentPostEditor(newContent)
          }
        />
        {isUploading ? <EditorLoading /> : null}
      </WrapPostEditor>
    );
  }
}

PostEditor.propTypes = {
  content: PropTypes.string,
};

PostEditor.defaultProps = {
  content: null,
};

export default PostEditor;
